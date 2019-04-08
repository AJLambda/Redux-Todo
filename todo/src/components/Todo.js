import React from "react";
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

const mapStatetoProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStatetoProps,
  { addTodo, toggleCompleted }
)(Todo);
