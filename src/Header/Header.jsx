import React from 'react';
import './style.css';

const divStyle = {
    width: '90%',
    height: 'auto   ',
    color: 'red',
    backgroundColor: '#d5e0f2',
    display: 'flex',
    margin: '0 auto',
};

const Header = () => (
        <div className="header" style={divStyle}>
            <ul>
                <li>Home</li>
                <li>Quem somos</li>
            </ul>
        </div>
);

export default Header;