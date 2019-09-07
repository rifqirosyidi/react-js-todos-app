import React from 'react';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import './App.css';
import uuid from 'uuid';



class App extends React.Component {
  state = {
    todos:[
      {
        'id': uuid.v4(),
        'title': 'Move Trash',
        'completed': false
      },
      {
        'id': uuid.v4(),
        'title': 'Buy Egg',
        'completed': false
      },
      {
        'id': uuid.v4(),
        'title': 'Read Book',
        'completed': false
      },
      {
        'id': uuid.v4(),
        'title': 'Complete ReactJS Course',
        'completed': false
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

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  
  deleteTodo = (id) => {
    this.setState({ 
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  }

 
  render() {
    return (
      <div className="App">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
