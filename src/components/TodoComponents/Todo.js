import React from 'react'
import './Todo.scss'

function Todo (props) {

  let taskName = props.todo.task;
  const capitalizeTask = taskName.charAt(0).toUpperCase() + taskName.slice(1)
  
  return (
        <li onClick={ () => {props.toggleComplete(props.todo.id)}} className={`item${props.todo.completed ? '-complete' : ''}`} >{capitalizeTask}</li>
  )
}
export default Todo
