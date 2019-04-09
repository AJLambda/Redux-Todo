import React, { Component } from "react";
import Todo from "./components/Todo";
import Title from "./components/Title";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <Todo />
      </div>
    );
  }
}

export default App;
