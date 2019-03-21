import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'
const todos = [
  {
    task: 'Take out trash',
    id: Date.now(),
    completed: false
  },

]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todos,
      task: '',
    }
  }

  handleChanges = event => {
    this.setState({
      task: event.target.value
    })
  }

  addTodo = event => {
    event.preventDefault();
    const todosCopy = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    }

    this.setState({
      todos: [...this.state.todos, todosCopy],
      task: ''
    })
  }
  render() {
    return (
      <div>
        <TodoList todos= { this.state.todos }/>
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
