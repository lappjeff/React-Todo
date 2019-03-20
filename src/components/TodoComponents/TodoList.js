import React from 'react';
import './Todo.css'
import Todo from './Todo'
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

function TodoList (props) {
  return (
    <div className='list-container'>
      <h1>Todos</h1>
      {props.todos.map(todo =>
        <Todo key={todo.id} todos={todo}/>
      )}
    </div>
  )
}

export default TodoList
