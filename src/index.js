import React from 'react';
import ReactDOM from 'react-dom/client';
// Eng asosiy kerakli import filelar manashu ikkita file hisoblanadi;
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // Bu yerda React.StrictMode o'rniga oddiy html tagni ham ishlatib ketsa b'ladi.
  // React.StrictMode ni ishlatishdan foydali tomoni qaysidir kutubxonalar to'g'ri kelmasa manashu habar chiqarib turadi. 
);

reportWebVitals();
