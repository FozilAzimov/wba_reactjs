import React, { Component } from 'react';
import { Container, Item } from './style';

class Navbar extends Component {
  render() {
    return (
      <Container>
        <Item>Home { this.props.data?.length || 0 }</Item>
        <Item>About</Item>
        <Item>Contact</Item>
        <Item>Services</Item>
      </Container>
    );
  }
}

export default Navbar;