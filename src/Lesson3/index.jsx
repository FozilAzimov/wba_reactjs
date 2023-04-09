import React from "react";

class State extends React.Component {
  constructor (props) {
    super(props);
    this.state = { count: 0, title: "Webbrain", tanla: null }
  }
  render() {
    const plus = () => {
      if (this.state.count < 10) this.setState({ count: this.state.count + 1 });
    }
    const minus = () => {
      if (this.state.count > 0) this.setState({ count: this.state.count - 1 });
    }
    const onInp = (e) => {
      this.setState({ title: e.target.value })
    }
    const onSelect = (e) => {
      this.setState({ tanla: e.target.value })
    }

    const onCheck = (e) => {
      if (e.target.checked) {
        let root = document.querySelector("#root");
        root.style.background = "red";
        console.log(e.target.checked);
      }
      else {
        let root = document.querySelector("#root");
        root.style.background = "white";
        console.log(e.target.checked);
      }
    }
    return (
      <div>
        <h1>{ this.state.title }</h1>
        <h1>State { this.state.count }</h1>
        <h1>Tanlamoq: { this.state.tanla }</h1>
        <button onClick={ plus }>+</button>
        <button onClick={ minus }>-</button>
        <input onChange={ onInp } type="text" />
        <select onChange={ onSelect }>
          <option value="on">On</option>
          <option value="off">Off</option>
        </select>
        <input onChange={ onCheck } type="checkbox" />
      </div>
    )
  }
}

export default State;