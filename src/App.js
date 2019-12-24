import React from 'react';
import Header from './Header';
import Body from './Body';
import Logo from './Logo';

const mainStyle = {
  display: 'flex',
  flexDirection: 'column',
};

function App() {
  return (
   <div style={mainStyle}>  
    <Header />
    <Logo />
    <Body />
   </div>
  );
}

export default App;
