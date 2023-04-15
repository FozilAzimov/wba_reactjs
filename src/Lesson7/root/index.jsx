import React, { Component } from 'react';
import Navber from '../components/Navbar';
import Body from '../components/Body';
import { users } from '../mock/index';

export default class Root extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: users,
    }
  }
  render() {
    const del = (id) => {
      let res = this.state.data.filter((value) => value.id !== id);
      this.setState({ data: res });
    }
    return (
      <div >
        <Navber data={ this.state.data } />
        <Body data={ this.state.data } del={ del } />
      </div>
    )
  }
}
