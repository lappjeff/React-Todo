import React from 'react'
import './Todo.css'

function Todo (props) {
  return (
        <li>{props.todos.task}</li>
  )
}
export default Todo
