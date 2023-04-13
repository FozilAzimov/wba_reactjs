import React from 'react';
import ReactDOM from 'react-dom/client';

// 2-Start
// import Student, { Mentor } from './Lesson2/index';
// import './Lesson2/style.css';
// 2-End

// 3-Start
// import State from './Lesson3/index';
// import './Lesson3/style.css';
// 3-End

// 4-Start
// import State from './Lesson4/index';
// 4-End

// 5-Start
// import State from './Lesson5/index';
// 5-End


// 2-Start
// let obj = [
//   { id: 1, name: "webbrain" },
//   { id: 2, name: "academy" },
//   { id: 3, name: "digital one" },
//   { id: 4, name: "company" },
//   { id: 5, name: "IT center" },
// ]
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     {/* <Student obj={ { title: "ReactJS", status: "active" } } /> */ }
//     {/* <Student><h3>Hello World!</h3></Student> */ }
//     {/* <Student /> */ }
//     {/* <Mentor name="Foziljon" /> */ }
//     {/* <Student title="Digital one" /> */ }
//     {/* <Mentor name="G'olibjon o'g'li" /> */ }
//     {
//       obj.map(value => {
//         return <Student child={ value } />
//       })
//     }
//   </React.StrictMode>
// );
// 2-End

// 3-4-5-Start
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <State />
  </React.StrictMode >
);
// 3-4-5-End
