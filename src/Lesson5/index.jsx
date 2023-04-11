import React from 'react';
import { users } from './data';
import './style.css';

class State extends React.Component {
  state = {
    name: null,
    status: null,
    data: users,
  };
  render() {

    const onInp = ({ target }) => {
      this.setState({ [target.name]: target.value })
    }

    const onSearch = ({ target }) => {
      const res = users.filter(value => value.name.toLowerCase().includes(target.value.toLowerCase()));
      this.setState({ data: res });
    }

    const delBtn = (id) => {
      console.log(id);
      let res = this.state.data.filter(item => item.id !== id);
      this.setState({ data: res });
    }

    const onAdd = () => {
      const user = {
        id: this.state.data.length + 1,
        name: this.state.name,
        status: this.state.status,
      }
      const res = [...users, user];
      this.setState({ name: "", status: "", data: res, });
      console.log(user);
    }

    return (
      <>
        <h1>name: { this.state.name }</h1>
        <h1>status: { this.state.status }</h1>

        <input value={ this.state.name } name="name" onChange={ onInp } type="text" placeholder='name' />
        <input value={ this.state.status } name="status" onChange={ onInp } type="text" placeholder='status' />
        <button onClick={ onAdd }>Add</button>
        <hr />
        <input name="search" onChange={ onSearch } type="search" placeholder='search' />
        <table border={ 1 }>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>

          <tbody>
            {
              this.state.data.length
                ?
                this.state.data.map(({ id, name, status }) => {
                  return (
                    <tr>
                      <td>{ id }</td>
                      <td>{ name }</td>
                      <td>{ status }</td>
                      <td>
                        <button onClick={ () => delBtn(id) }>delete</button>
                      </td>
                      <td>
                        <button>edit</button>
                      </td>
                    </tr>
                  )
                })
                :
                <tr>
                  <th colSpan={ 5 }>No data</th>
                </tr>
            }
          </tbody>
        </table >
      </>
    )
  }
}

export default State;