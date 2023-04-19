import React, { Component } from 'react';
import Body from '../components/Body';
import Navbar from '../components/Navbar';
import Lifecycles from '../components/Lifecycles';
import Functions from '../components/Function';
import Scroll from '../components/Scroll';


export default class Root extends Component {
  render() {
    return (
      <div>
        {/* <Navbar />
        <Lifecycles /> */}
        {/* <Functions /> */ }
        <Body />
        <Scroll />
      </div>
    )
  }
}