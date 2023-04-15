import React from 'react';
import { Div, Box, H1, P } from './style.js';


class Styled extends React.Component {
  render() {
    return (
      <>
        <Div>
          {/* <h1>Webbrain Academy</h1>
          <h1>Webbrain Academy</h1>
          <h1 className='title'>Webbrain Academy</h1>
          <div className='title'>title</div> */}
        </Div>
        <Box type="Large">Large 200</Box>
        <Box type="Medium">Medium 150</Box>
        <Box type="Small">Small 100</Box>
        <Box >Default 50</Box>
        <H1>Webbrain Academy</H1>
        <P>Webbrain Academy</P>
      </>

    )
  }
}
export default Styled;