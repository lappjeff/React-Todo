import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

let todos = []

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos,
      task: '',
    }
  }

  toggleComplete = itemId => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.map( todoItem => {
          if(todoItem.id === itemId) {
            return {
              ...todoItem,
              completed: !todoItem.completed
            }
          }
          return todoItem
        })
      }
    })
  }

  handleChanges = event => {
    this.setState({
      task: event.target.value
    })
  }

  addTodo = event => {
    event.preventDefault();

    this.setState(prevState =>
      { return {todos: [...prevState.todos,
        {
          task: prevState.task,
          id: Date.now(),
          completed: false,
        }
      ], task: '' }
    })

  }
  render() {
    return (
      <div className='container'>
        <TodoList todos= { this.state.todos } toggleComplete={this.toggleComplete}/>
        <TodoForm
        task={this.state.task}
        handleChange={this.handleChanges}
        addTodo={this.addTodo}
        />

      </div>
    );
  }
}

export default App;
