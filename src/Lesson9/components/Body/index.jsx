import React from 'react'
import { Container } from './style';
import { DataContext } from '../Context';

export default function Body() {
  const [data, setData] = DataContext();

  const onDelete = (id) => {
    let res = data.filter((user) => user.id !== id);
    setData(res);
  }
  return (
    <Container>
      <h1>Students List { data.length }</h1>
      {
        data.map(({ id, name, status }) => {
          return (
            <h2 key={ id }>{ id } - { name }  - { status } <button className='btn' onClick={ () => onDelete(id) }>delete</button></h2>
          )
        })
      }
    </Container>
  )
}
