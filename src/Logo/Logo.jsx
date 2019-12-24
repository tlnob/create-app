import React from 'react';
import { findByLabelText } from '@testing-library/dom';

const divStyle = {
    height: 'auto   ',
    backgroundColor: 'transparent',
    display: 'flex',
    margin: '0 auto',
    fontSize: '50px',
    justifyContent: 'end',
};

const Logo = () => (
        <div className="logo" style={divStyle}>
            Beer Shop
        </div>
);

export default Logo;