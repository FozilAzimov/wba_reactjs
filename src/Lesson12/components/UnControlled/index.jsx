import React, { useRef } from 'react';

export default function UnControlled() {
  console.log("UnControlled");
  const title = useRef("");
  return (
    <>
      <h1>UnControlled</h1>
      <input ref={ title } type="text" />
      <button onClick={ () => {
        console.log(title.current.value);
      } }>Click</button>
    </>
  )
}
