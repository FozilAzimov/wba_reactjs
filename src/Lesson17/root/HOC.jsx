import React, { useState } from 'react'
import func from './Umumiy';

function HOC(prop) {
  const [count, setCount] = useState(0);
  const getCount = () => {
    setCount((prev) => prev + 1);
  }
  const style = { padding: '10px' }

  console.log(prop);
  return (
    <>
      <h1>HOC</h1>
      <h2>Counter: { count }</h2>
      <button style={ style } onClick={ getCount }>click</button>
    </>
  )
}
export default func(HOC);