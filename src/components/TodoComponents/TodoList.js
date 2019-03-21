import React from 'react';
import './Todo.scss'
import Todo from './Todo'
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

function TodoList (props) {
  const todoItems = props.todos.map(todo =>
    <Todo toggleComplete={props.toggleComplete}  key={todo.id} todo={todo}/>
  )
  return (
    <div className='list-container'>
      <ul className='todoItems'>
        {todoItems}
      </ul>
    </div>
  )
}

export default TodoList
