import React from 'react';
import './Todo.css'
import Todo from './Todo'
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

function TodoList (props) {
  const todoItems = props.todos.map(todo =>
    <Todo key={todo.id} todos={todo}/>
  )
  return (
    <div className='list-container'>
      <h1>Todos</h1>
      <ul className='todoItems'>
        {todoItems}
      </ul>
    </div>
  )
}

export default TodoList
