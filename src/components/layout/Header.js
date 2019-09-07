import React from 'react';

function Header() {
    return (
        <header style={ headerStyle }>
            <h1>TodoList</h1>
        </header>
    );
}

const headerStyle = {
    background: '#1C1311',
    color: '#FFF',
    textAlign: 'center',
    padding: '10px'
}


export default Header;
