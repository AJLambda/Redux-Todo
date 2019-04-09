//This component will be "connected" to the Redux Store
//This is the Container, it will use connect and a mapStateToProps(state) function to read from the state tree

import React from "react";

//Step 1- import connect from react-redux
import { connect } from "react-redux";

//Import the addTodo and toggleCompleted functions from the actions directory
import { addTodo, toggleCompleted, deleteTodo } from "../actions";

class Todo extends React.Component {
  // When the user presses submit you will invoke the appropriate action creator which will then have its new action fed through all of the reducers.
  submitHandler = e => {
    e.preventDefault();
    this.props.addTodo(e.target.todo.value); //Invokes this.props.addTodo and passes in todo value
    e.target.todo.value = "";
  };

  completeHandler = (e, todo) => {
    e.preventDefault();
    this.props.toggleCompleted(todo);
  };

  deleteHandler = todo => {
    this.props.deleteTodo(todo);
  };

  //You will display the todo list by creating a container that receives the application's todos array as a prop. That container then uses map to display the array.
  render() {
    console.log(this.props.todos);
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
              <button onClick={() => this.deleteHandler(todo)}>Delete</button>
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
  { addTodo, toggleCompleted, deleteTodo } //passes addTodo and toggleCompleted functions from the actions directory to add them to props. Actions creators should be passed inside an object as the second argument to the connect function inside components that need access to the Redux store.
)(Todo);
