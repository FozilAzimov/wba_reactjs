import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Error from '../components/Error';
import SignIn from '../components/SignIn';


export default function Root() {

  const token = JSON.parse(localStorage.getItem('token'));

  return (
    <>
      <Routes>
        <Route element={ <Navbar /> }>
          <Route path='/' element={ <Navigate to='/home' /> } />
          <Route path='/home' element={ <Home /> } />
          <Route path='/about' element={ token ? <About /> : <Navigate to={ '/signin' } /> } />
          <Route path='/services' element={ <Services /> } />
          <Route path='/contact' element={ <Contact /> } />
          <Route path='/signin' element={ <SignIn /> } />
          <Route path='*' element={ <Error /> } />
        </Route>
      </Routes>
    </>
  )
}
