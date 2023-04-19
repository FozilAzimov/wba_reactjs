import React, { Component } from 'react'

export default class Lifecycle extends Component {
  constructor () {
    super();
    this.state = {
      name: "Webbrain",
      data: null,
    }
    console.log("Constructor");
  }

  componentDidMount() {
    console.log("DidMount");
    this.setState({ data: [1, 2, 3] });
  }

  static getDrivedStateFromProps(props, state) {
    console.log(props);
    return { name: props.name };
  }

  // shouldComponentUpdate() {
  //   return false;
  // }

  componentWillUnmount() {
    console.log("WillUnmount");
  }

  componentDidUpdate() {
    console.log("DidUpdate");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);
  }

  render() {
    console.log(this.state.data);
    console.log("Render");
    return (
      <div>
        {
          console.log("Return")
        }
      </div>
    )
  }
}
