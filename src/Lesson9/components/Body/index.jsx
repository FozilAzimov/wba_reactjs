import React, { useState, useContext } from "react";
import { Container } from "./style";
import { Counter } from "../../Context/Counter";



const Body = () => {
  const [count, setCount] = useState(0);
  const [counter, dispatch] = useContext(Counter);

  const minus = () => setCount(count - 1);
  const plus = () => setCount(count + 1);
  const by1 = (besh) => setCount(count + besh);
  const by2 = (besh) => setCount(count - besh);

  return (
    <Container>
      <h1>Hello useReduser</h1>
      <h1>Count: { count }</h1>
      <h1>CountReducer: { counter.count }</h1>
      <button className="btn" onClick={ minus }>-</button>
      <button className="btn" onClick={ plus }>+</button>
      <button className="btn" onClick={ () => by1(5) }>+5</button>
      <button className="btn" onClick={ () => by2(5) }>-5</button>
      <br />
      <br />
      <hr />
      <br />
      <button className="btn" onClick={ () => dispatch({ type: "minus" }) }>-</button>
      <button className="btn" onClick={ () => dispatch({ type: "plus" }) }>+</button>
      <button className="btn" onClick={ () => dispatch({ type: "by1", payload: 5, }) }>+5</button>
      <button className="btn" onClick={ () => dispatch({ type: "by2", payload: 5, }) }>-5</button>


    </Container>
  )
}

export default Body;