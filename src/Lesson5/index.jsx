import React from 'react';
import { users } from './data';
import './style.css';

class State extends React.Component {
  state = {
    name: null,
    status: null,
    data: users,
    search: "id",
    active: null,
  };
  render() {

    const onInp = ({ target }) => {
      this.setState({ [target.name]: target.value })
    }

    const onSearch = ({ target }) => {
      const res = users.filter(value => `${ value[this.state.search] }`.toLowerCase().includes(target.value.toLowerCase()));
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
      this.setState({ name: "", status: "", data: [...users, user], });
    }

    const onSelect = (e) => {
      this.setState({ search: e.target.value })
    }

    const onEdit = ({ id, name, status }, save) => {
      if (save) this.setState({ active: null });
      else this.setState({ active: { id, name, status } });
    }

    const onActiveName = ({ target: { value } }) => {
      this.setState({ active: { ...this.state.active, name: value } })
    }
    const onActiveStatus = ({ target: { value } }) => {
      this.setState({ active: { ...this.state.active, status: value } })
    }

    const onSave = ({ id }) => {
      let res = this.state.data.map(value => value.id === id ? this.state.active : value);
      this.setState({ data: res, active: null });
    }

    return (
      <>
        <h1>name: { this.state.name }</h1>
        <h1>status: { this.state.status }</h1>

        <input value={ this.state.name } name="name" onChange={ onInp } type="text" placeholder='name' />
        <input value={ this.state.status } name="status" onChange={ onInp } type="text" placeholder='status' />
        <button onClick={ onAdd }>Add</button>
        <hr />
        <select onClick={ onSelect }>
          <option value="id">ID</option>
          <option value="name">Name</option>
          <option value="status">Status</option>
        </select>
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
                      <td>{ this.state.active?.id === id ? <input onChange={ onActiveName } type='text' defaultValue={ name } /> : name }</td>
                      <td>{ this.state.active?.id === id ? <input onChange={ onActiveStatus } type='text' defaultValue={ status } /> : status }</td>
                      <td>
                        <button onClick={ () => delBtn(id) }>delete</button>
                      </td>
                      <td>
                        {
                          this.state.active?.id === id ?
                            <>
                              <button onClick={ () => this.setState({ active: null }) }>cancel</button>
                              <button onClick={ () => onSave({ id }, this.state.active?.id) }>save</button>
                            </>
                            :
                            <button onClick={ () => onEdit({ id, name, status }, this.state.active?.id) }>edit</button>
                        }
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