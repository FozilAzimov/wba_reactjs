// import { useDeferredValue, useMemo } from "react";

import axios from "axios"
import { useEffect, useId } from "react"

export default function List({ value }) {

  // const useDef = useDeferredValue(value);

  // const newList = useMemo(() => {
  //   const arr = [];
  //   for (let i = 1; i <= 20000; i++) {
  //     arr.push(`${ i } - ${ useDef }`);
  //   }
  //   return arr;
  // }, [useDef]);

  // const isPending = value !== useDef;


  // return isPending ? 'loading...' : newList;

  useEffect(() => {

    axios({
      url: 'https://jsonplaceholder.typicode.com/users',
    })

  }, [])

  const id = useId();

  return <h1> { id }Data Loading</h1>
}
