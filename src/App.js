import React from 'react';
import Todos from './components/Todos';
import './App.css';


class App extends React.Component {
  state = {
    todos:[
      {
        'id': 1,
        'title': 'Move Trash',
        'completed': false
      },
      {
        'id': 2,
        'title': 'Buy Egg',
        'completed': true
      },
      {
        'id': 3,
        'title': 'Read Book',
        'completed': false
      },
      {
        'id': 4,
        'title': 'Complete ReactJS Course',
        'completed': true
      }
    ]
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
       todo.completed = !todo.completed; 
      }
      return todo;
    })});
  }

 
  render() {
    return (
      <div className="App">
          <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
