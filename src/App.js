import React from 'react';
import TodoList from './components/TodoComponents/TodoList'

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
      id: '',
      completed: ''
    }
  }
  render() {
    return (
      <div>
        <TodoList todos= { this.state.todos }/>
      </div>
    );
  }
}

export default App;
