import React from 'react';
import { Nav } from './style';

function Navbar({ data, data1, data2 }) {
  console.log('NAVBAR component');
  return (
    <Nav>
      <h2>{ JSON.parse(data).title }</h2>
      <h2>{ data1.title }</h2>
      <h2>{ data2("useCallback").title }</h2>
      <h2>Home</h2>
      <h2>About</h2>
      <h2>Services</h2>
      <h2>Contact</h2>
    </Nav>
  )
}

export default Navbar;