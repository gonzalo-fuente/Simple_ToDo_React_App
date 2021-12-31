import React from "react";

const ListTodos = ({ todos, deleteTodo }) => {
  
  const todoList = todos.length ? (
    todos.map(todo => {
      return(
        <div className="collection-item" key={ todo.id }>
          <span onClick={ () => {deleteTodo(todo.id)} }>{ todo.todo }</span>
        </div>
      )
    })
  ) : (
    <p className="center teal-text text-darken-2">Congrats!!! You finished all your tasks</p>
  )
  
  return (
      <div className="todos collection">
        { todoList }
      </div>
    )
}

export default ListTodos