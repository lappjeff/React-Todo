import React from 'react'
import './Todo.css'

function TodoForm (props) {
  return (
    <div className='form-wrapper'>
      <form>
        <input placeholder='Input Todo'/>
        <button>Add Todo</button>
        <button>Clear All</button>
      </form>
    </div>
  )
}

export default TodoForm
