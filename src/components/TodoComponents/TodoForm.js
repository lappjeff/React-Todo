import React from 'react'
import './Todo.scss'

function TodoForm (props) {
  return (
    <div className='form-wrapper'>
      <form>
        <input
        placeholder='Input Todo'
        type='text'
        value={props.task}
        onChange={props.handleChange}
        name='task'
        />
        <button onClick={props.addTodo}>Add Todo</button>

      </form>
    </div>
  )
}


export default TodoForm
