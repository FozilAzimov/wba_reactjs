import React, { Component } from 'react';
import { Container } from './style';

class Body extends Component {

  render() {

    if (this.props.data.length === 0) {
      return <Container>
        <h1>Users ma'lumotlari! { this.props.data.length }</h1>
        <h1>No Data</h1>
      </Container>
    }

    return (
      <Container>

        <h1>Users ma'lumotlari! { this.props.data.length }</h1>

        {
          this.props.data.map(({ id, name, status }) => {
            return <h1 key={ id }>{ id } - { name } - { status } <button onClick={ () => this.props.del(id) }>delete</button></h1>
          })
        }

      </Container>
    );
  }
}

export default Body;