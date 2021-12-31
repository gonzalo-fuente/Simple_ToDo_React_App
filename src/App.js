import React, { Component } from "react";
import ListTodos from "./ListTodos";
import AddTodo from "./AddTodo";

class App extends Component {
  state = {
    todos: [
      {id: 1, todo: 'Learn React'},
      {id: 2, todo: 'Get money to buy PS5'},
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    });
  }

  addTodo = (todo) => {
    // Modify this line with database id
    todo.id = Math.random();
    // Modify this line with database id

    const todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="App container">
        <h1 className="center blue-text">ToDo's React App</h1>
        <ListTodos 
        todos={ this.state.todos }
        deleteTodo={ this.deleteTodo }
        />
        <AddTodo addTodo={ this.addTodo }/>
      </div>
    );
  }
}

export default App;
