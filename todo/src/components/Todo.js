import React from "react";
import { connect } from "react-redux";

import { addTodo, toggleCompleted } from "../actions";

class Todo extends React.Component {
  render() {
    return (
      <div>
        <h1>TODO LIST</h1>
        {this.props.todos.map((todo, id) => {
          return <h2 key={id}>{todo.todo}</h2>;
        })}
        <form>
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
