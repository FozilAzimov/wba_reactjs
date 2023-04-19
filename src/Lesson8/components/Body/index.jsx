import React, { Component } from 'react';
import { data } from '../../mock/data';
export default class Body extends Component {

  state = {
    data,
  }

  render() {

    const del = (id) => {
      let res = this.state.data.filter(value => value.id !== id);
      this.setState({ data: res });
    }

    return (
      <div>
        <h1>Students { this.state.data.length }</h1>
        {
          this.state.data.map(({ id, name, status }) => {
            return (
              <h1 key={ id }> { id } - { name } - { status } <button onClick={ () => del(id) }>dalete</button></h1>
            )
          })
        }
      </div>
    )
  }
}