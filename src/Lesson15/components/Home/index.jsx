import React, { useState } from 'react'
import { data } from '../Mock';
export default function Home() {
  const [users, setUsers] = useState(data);
  const [name, setName] = useState({});

  const del = (user) => {
    let res = users.filter(value => value.id !== user.id);
    setUsers(res);
    setName(user);
  }

  return (
    <div style={ { display: 'flex' } }>
      <div style={ { flex: '1' } }>
        <h1>Home Page</h1>
        {
          users.map((user) => {
            return <h2 key={ user.id }>Ism: { user.id } - Name: { user.name } - Password: { user.password }<button onClick={ () => del(user) }>delete</button></h2>
          })
        }
      </div>
      <div style={ { flex: '1', marginLeft: '10px' } }>
        <h1>Selected</h1>
        <h2>{ `${ name.id ? name.id : '' }-${ name.name ? name.name : '' }` }</h2>
      </div>
    </div>

  )
}
