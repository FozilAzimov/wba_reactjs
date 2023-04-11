// import React from 'react';
// import { users } from './data';
// import './style.css';

// class State extends React.Component {
//   // state = { name: "Foziljon", surname: "Azimov" };
//   state = {
//     name: null,
//     surname: null,
//     data: users,
//   };
//   render() {
//     // const onInp1 = (e, prop) => {
//     //   this.setState({ name: `${ e.target.value } ${ prop }` })
//     // }
//     // const onInp2 = (e, prop) => {
//     //   this.setState({ surname: `${ e.target.value } ${ prop }` })
//     // }

//     const onInp = (e) => {
//       console.log(e.target.name);
//       this.setState({ [e.target.name]: e.target.value })
//     }

//     const onSearch = ({ target }) => {
//       const res = users.filter(value => value.name.toLowerCase().includes(target.value.toLowerCase()));
//       this.setState({ data: res });
//     }
//     return (
//       <>
//         <h1>name: { this.state.name }</h1>
//         <h1>surname: { this.state.surname }</h1>

//         {/* <input name="name" onChange={ (e) => onInp1(e, "hey") } type="text" placeholder='name' />
//         <input name="surname" onChange={ (e) => onInp2(e, "huy") } type="text" placeholder='surname' /> */}

//         <input name="name" onChange={ onInp } type="text" placeholder='name' />
//         <input name="surname" onChange={ onInp } type="text" placeholder='surname' />
//         <input name="search" onChange={ onSearch } type="search" placeholder='search' />
//         <hr />
//         {
//           this.state.data.map(({ id, name, status }) => {
//             return (
//               <>
//                 <table border={ 1 }>
//                   <thead>
//                     <tr>
//                       <td>{ id }</td>
//                       <td>{ name }</td>
//                       <td>{ status }</td>
//                     </tr>
//                   </thead>
//                 </table>
//               </>
//             )
//           })
//         }
//       </>
//     )
//   }
// }

// export default State;