import { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";

export const Counter = createContext();

export const CounterContext = (props) => {
  const data = useReducer(reducer, initialState);
  return <Counter.Provider value={ data }>{ props.children }</Counter.Provider>
}