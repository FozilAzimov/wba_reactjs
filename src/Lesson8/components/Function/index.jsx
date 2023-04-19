import React, { useState, useEffect } from "react";

import {
  Btn,
} from './style'

export default function Func() {
  const [name, func] = useState("Webbrain");
  const [name2, func2] = useState("Academy");
  const [count, setCount] = useState(1);

  function update() {
    func("Academy");
    func2("Webbrain");
    console.log(name, name2);
  }
  function minus() {
    setCount(count - 1);
  }
  function plus() {
    setCount(count + 1);
  }

  useEffect(() => {
    console.log("Welcome to Webbrain Academy");
  }, [name])

  return (
    <div>
      <h1>Hello { count }</h1>
      <h1>Welcome to { name } { name2 }</h1>
      <Btn onClick={ update }>Update</Btn>
      <Btn onClick={ minus }>-</Btn>
      <Btn onClick={ plus }>+</Btn>
    </div>
  )
}
