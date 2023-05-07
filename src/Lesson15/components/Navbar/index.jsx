import React from 'react';
import {
  Container,
  Item
} from './style';
import { Outlet, useNavigate } from 'react-router-dom';


export default function Navbar() {
  const btn = useNavigate();
  return (
    <>
      <Container>
        <Item to='/'>LOGO</Item>
        <Item to='/home'>Home</Item>
        <Item to='/about'>About</Item>
        <Item to='/services'>Services</Item>
        <Item to='/contact'>Contact</Item>
        <Item to='/signin'>Sign in</Item>
      </Container>
      <button style={ { padding: '10px' } } onClick={ () => btn(-1) }>Orqaga</button>
      <button style={ { padding: '10px' } } onClick={ () => btn(1) }>Oldiga</button>
      <Outlet />
    </>
  )
}
