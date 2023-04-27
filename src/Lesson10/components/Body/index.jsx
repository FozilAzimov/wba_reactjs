import React, { useState } from 'react';

import { Container } from './style';

export default function Body() {
  const [count, setCount] = useState(Number(localStorage.getItem('count')) || 0);

  // const plus = () => {
  //   setCount(count + 1);
  //   localStorage.setItem('count', count + 1);
  // }
  // const minus = () => {
  //   setCount(count - 1);
  //   localStorage.setItem('count', count - 1);
  // }
  const del = () => {
    localStorage.removeItem('count')
  }
  const clear = () => {
    localStorage.clear()
  }

  const plus = () => {
    setCount(count + 1);
    localStorage.setItem('count', JSON.stringify({ count: count + 1 }));
  }
  const minus = () => {
    setCount(count - 1);
    localStorage.setItem('count', JSON.stringify({ count: count - 1 }));
  }

  console.log(JSON.parse(localStorage.getItem('count')));

  return (
    <Container>

      <h1>Body Component</h1>
      <h2>Counter: { count }</h2>

      <button onClick={ plus }>Count+</button>
      <button onClick={ minus }>Count-</button>
      <button onClick={ del }>Delate</button>
      <button onClick={ clear }> Clear</button >

    </Container >
  )
}
