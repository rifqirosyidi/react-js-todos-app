import React from 'react';

class Todos extends React.Component {
    
    render() {
        console.log(this.props.todos)
        return (
            <div>
                <h1>Todo App</h1>
            </div>
        );
    }

}

export default Todos;
