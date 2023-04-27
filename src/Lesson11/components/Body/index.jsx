import React, { memo } from 'react';
import Navbar from '../Navbar';

function Body({ data, data1, data2 }) {
  console.log('BODY component');
  return (
    <div>
      <Navbar data={ data } data1={ data1 } data2={ data2 } />
      <h1>Body</h1>
    </div>
  )
}
export default memo(Body);