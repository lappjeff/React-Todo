import React from 'react'
import './Todo.css'

function Todo (props) {

  return (
        <li onClick={ () => {props.toggleComplete(props.todo.id)}} className={`item${props.todo.completed ? '-complete' : ''}`} >{props.todo.task}</li>
  )
}
export default Todo
