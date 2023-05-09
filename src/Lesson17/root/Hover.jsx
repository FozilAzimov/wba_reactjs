import React, { useState } from 'react';
import func from './Umumiy';

function Hover(prop) {
  const [count, setCount] = useState(0);
  const getCount = () => {
    setCount((prev) => prev + 1);
  }
  const style = { padding: '10px' }

  console.log(prop);
  return (
    <>
      <h1>Hover</h1>
      <h2>Counter: { count }</h2>
      <button style={ style } onMouseOver={ getCount }>click</button>
    </>
  )
}
export default func(Hover);