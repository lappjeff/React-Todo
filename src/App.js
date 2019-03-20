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
      id: Date.now(),
      completed: false
    }
  }

  handleChanges = event => {
    console.log('event: ', event.target.value)
    this.setState({
      task: event.target.value
    })
  }
  render() {
    return (
      <div>
        <TodoList todos= { this.state.todos }/>
        <TodoForm
        task={this.state.task}
        id={this.state.id}
        completed={this.state.completed}
        handleChange={this.handleChanges}/>
      </div>
    );
  }
}

export default App;
