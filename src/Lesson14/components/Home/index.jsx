import React from 'react'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

export default function Home(prop) {
  // const location = useLocation();
  console.log(window.location);
  return (
    <h1 style={ { color: 'lightcoral' } }> Home Page</h1 >
  )
}
