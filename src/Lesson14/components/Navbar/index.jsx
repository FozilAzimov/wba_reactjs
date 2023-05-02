import React from 'react';

import {
  Container,
  List,
} from './style';

export default function Navbar() {

  return (
    <Container>

      <List to='/home'>Home</List>

      <List to='/about'>About</List>

      <List to='/services'>Services</List>

      <List to='/contact'>Contact</List>

    </Container>
  )
}
