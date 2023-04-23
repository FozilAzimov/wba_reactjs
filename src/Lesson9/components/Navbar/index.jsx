import React, { useContext } from 'react';
import { Nav } from './style';
import { StudentContext } from '../Context';



export default function Navbar() {
  const [data, setData] = useContext(StudentContext);
  return (
    <Nav>
      <h1>Students { data.length }</h1>
      <h1>Home</h1>
      <h1>About</h1>
      <h1>Services</h1>
      <h1>Contact</h1>
    </Nav>
  )
}
