import React, { useEffect } from 'react';
import { Route, Switch, useHistory, Redirect, useParams } from 'react-router-dom/cjs/react-router-dom';


import Navbar from '../components/Navbar';
import Home from '../components/Home';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';


export default function Root() {

  const history = useHistory();

  const param = useParams()

  // useEffect(() => {
  //   return history.push('/home')
  // }, [])
  console.log(history);
  return (
    <>
      <Navbar />
      <h1 style={ { cursor: 'pointer' } } onClick={ () => history.push({
        pathname: '/home',
        state: [1, 2, 3, 4, 5],
      }) }>LOGO</h1>

      <Switch>

        <Route path='/home' component={ Home } />

        <Route path='/about'>
          <About />
        </Route>

        <Route path='/services'>
          <Services />
        </Route>

        <Route path='/contact'>
          <Contact />
        </Route>

        <Route path='/'>
          <Redirect to='/home' />
        </Route>

        <Route path='*'>
          <h1 style={ { color: 'red' } }>404 Error</h1>
        </Route>
      </Switch>


      <button style={ { padding: '10px' } } onClick={
        () => {
          return history.goForward()
        }
      }>Oldinga</button>
      <button style={ { padding: '10px' } } onClick={
        () => {
          return history.goBack()
        }
      }>Orqaga</button>
    </>
  )
}
