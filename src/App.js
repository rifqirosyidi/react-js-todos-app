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
        'completed': false
      },
      {
        'id': 3,
        'title': 'Read Book',
        'completed': false
      },
      {
        'id': 4,
        'title': 'Complete ReactJS Course',
        'completed': false
      }
    ]
  }

 
  render() {
    return (
      <div className="App">
          <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
