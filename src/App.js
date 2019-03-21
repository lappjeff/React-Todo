import React from 'react';
import './components/TodoComponents/Todo.scss'
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

  //Toggles completed state to true or false depending on the current state of todo item
  toggleComplete = itemId => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.map( todoItem => {
          //if id of item passed into map matches id of item passed into toggleComplete
          //return a spread of todoItem and change the completed value to the opposite of its current value
          // if true change to false : if false change to true
          if(todoItem.id === itemId) {
            return {
              ...todoItem,
              completed: !todoItem.completed
            }
          }
          //else just return item(ignore item)
          return todoItem
        })
      }
    })
  }

  removeCompleted = event => {
    event.preventDefault();
    const filteredTodos = this.state.todos.filter(todo => {
      return todo.completed === false;
    })
    this.setState({ todos: filteredTodos })
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
        <div className='header'>
          <h1>ToDo's</h1>
          <TodoForm
          task={this.state.task}
          handleChange={this.handleChanges}
          addTodo={this.addTodo}
          removeCompleted={this.removeCompleted}
          />
        </div>
        <main>
          <TodoList todos= { this.state.todos } toggleComplete={this.toggleComplete}/>
          <button onClick={this.removeCompleted}>Clear Completed</button>
        </main>

      </div>
    );
  }
}

export default App;
