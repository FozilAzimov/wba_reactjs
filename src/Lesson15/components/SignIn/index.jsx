import React, { useRef } from 'react';

export default function SignIn() {
  const name = useRef();
  const parol = useRef();
  const onClick = () => {
    if (name.current.value === 'webbrain' && parol.current.value === '123') {
      localStorage.setItem('token', true);
    }
    else localStorage.setItem('token', false)
  }
  return (
    <>
      <h1>SignIn Page</h1>
      <form>
        <input ref={ name } placeholder='Name' type="text" />
        <input ref={ parol } placeholder='Parol' type="password" />
      </form>
      <button onClick={ onClick }>Click me</button>
    </>
  )
}
