import React, { useEffect } from 'react'
import axios from 'axios';

export default function Axioc() {

  useEffect(() => {
    axios({
      url: `https://jsonplaceholder.typicode.com/users`,
      method: 'POST',
      data: { name: 'webbrain' },
      timeout: 10000,
    }).then(res => console.log(res))
  }, [])

  return (
    <h1>Axioc Component</h1>
  )
}
