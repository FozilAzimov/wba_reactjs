import React from "react";

class Student extends React.Component {
  render() {
    const children = this.props.obj;
    const child = this.props.child;


    // const status = this.props.status;
    return (
      <div>
        {/* <h1>Hey { children?.title } { children?.status }</h1> */ }
        <h1>{ child.id }-{ child.name }</h1>
      </div>
    )
  }
}


// let name = "Azimov";
// class Mentor extends React.Component {
//   render() {
//     const firstName = this.props.name;
//     console.log(firstName);
//     console.log(this.props);
//     return (
//       <div>
//         <h1>{ name } { firstName }</h1>
//       </div>
//     )
//   }
// }
// export { Mentor };
export default Student;