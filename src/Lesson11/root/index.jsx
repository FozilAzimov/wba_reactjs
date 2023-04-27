import React, { useCallback, useMemo, useState } from 'react';
import Body from '../components/Body';

export default function Root() {
  console.log('ROOT component');

  const [count, setCount] = useState(0);

  const json = { title: "JSON" }

  const useMemoData = useMemo(() => {
    return { title: 'useMemo' }
  }, [])

  const useCallbackData = useCallback((param) => {
    return { title: param }
  }, [])
  return (
    <>
      <h1>Counter: { count }</h1>
      <button onClick={ () => setCount(count + 1) }>Count+</button>
      <button onClick={ () => setCount(count - 1) }>Count-</button>
      <Body data={ JSON.stringify(json) } data1={ useMemoData } data2={ useCallbackData } />
    </>
  )
}
