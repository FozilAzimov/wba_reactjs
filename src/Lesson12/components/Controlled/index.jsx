import React, { useState } from 'react'

export default function Controlled() {
  console.log("Controlled");
  const [title, setTitle] = useState("");
  return (
    <>
      <h1>Controlled: { title }</h1>
      <input onChange={ ({ target }) => setTitle(target.value) } type="text" />
    </>
  )
}
