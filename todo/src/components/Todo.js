//This component will be "connected" to the Redux Store

import React from "react";

//Step 1- import connect from react-redux
import { connect } from "react-redux";

import { addTodo, toggleCompleted } from "../actions";

class Todo extends React.Component {
  submitHandler = e => {
    e.preventDefault();
    this.props.addTodo(e.target.todo.value);
    e.target.todo.value = "";
  };

  completeHandler = (e, todo) => {
    e.preventDefault();
    this.props.toggleCompleted(todo);
  };

  render() {
    return (
      <div>
        <h1>TODO LIST</h1>
        {this.props.todos.map((todo, id) => {
          return (
            <h2
              key={id}
              onClick={e => this.completeHandler(e, todo)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none"
              }}
            >
              {todo.todo}
            </h2>
          );
        })}
        <form onSubmit={e => this.submitHandler(e)}>
          <input type="text" placeholder="Add new todo" name="todo" />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

//Step 3- create mapStatetoProps

//mapStatetoProps is a function that tells connect which pieces of state to pass to the component
//Takes state as an argument (the entire state tree, whatever your reducer is returning as the state tree)
//Returns an object. The properties in the returned object are what get passed to the component as props.
//The values in the returned object are properties from the state object (state tree)
const mapStatetoProps = state => {
  return {
    todos: state.todos
  };
};

//Step 2- instead of exporting the component, export the connect function call
//connect is a HOF

//Invoke connect twice-
//First call, pass in a function and an object
//Second call, pass in the component that we are connecting
export default connect(
  mapStatetoProps,
  { addTodo, toggleCompleted }
)(Todo);
