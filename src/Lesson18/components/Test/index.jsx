import React, { useState, Suspense } from 'react';
import { flushSync } from 'react-dom';
import axios from 'axios';
const List = React.lazy(() => import('../List'));

export default function Test() {

  const [count, setCount] = useState(0);
  const [state, setState] = useState(`${ count } Juft ham Toq ham emas`);

  const getCount = () => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(() => {
      flushSync(() => {
        setCount(count + 1);
      })
      flushSync(() => {
        setState((count + 1) % 2 === 0 ? "Juft" : "Toq")
      })
    })
  }

  const style = { padding: '10px' }

  const [value, setValue] = useState('');
  const setChange = ({ target: { value } }) => {
    setValue(value);
  }

  return (
    <>
      <h1>Test</h1>
      <h2>Counter: { count }</h2>
      <h2>{ state }</h2>
      <button style={ style } onClick={ getCount }>Click</button>

      <input type="text" onChange={ setChange } />

      <Suspense fallback={ <h1>Loading...</h1> }>
        <List value={ value } />
      </Suspense>
    </>
  )
}
