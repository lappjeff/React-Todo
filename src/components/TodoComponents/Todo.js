import React from 'react'
import './Todo.css'

function Todo (props) {
  return (
    <div className='todo-container'>
      <ul className='todos'>
        <li>{props.todos.task}</li>
      </ul>
    </div>
  )
}
export default Todo
