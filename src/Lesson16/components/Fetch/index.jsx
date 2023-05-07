import React, { useEffect } from 'react'

export default function Fetch() {
  const signal = new AbortController();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ name: 'webbrain' }),
    })
      .then(res => res.json())
      .then(res => console.log(res))
  }, [])
  setTimeout(() => {
    signal.abort();
  }, 10000);
  return (
    <h1>Fetch</h1>
  )
}
