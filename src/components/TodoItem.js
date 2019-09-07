import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

    getStyle = () => {
        return {
            padding: '10px',
            background: '#f4f4f4',
            borderBottom: '1px solid #dedede',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo
        return (
            <div style={this.getStyle()} >
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
                { title }
                <button style={btnClose} onClick={this.props.deleteTodo.bind(this, id)}>x</button>
            </div>
        );
    }
}


// Prop Types
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnClose = {
    background: '#ff0000',
    color: '#ffffff',
    border: 'none',
    float: 'right',
    borderRadius: '50%',
    padding: '5px 10px',
    cursor: 'pointer'
}

export default TodoItem;