import styled from "styled-components";


export const Div = styled.div`
h1{
  color: red;
}
.title{
  color: blue;
  font-size: 30px;
}
`

// export const Box = styled.div`
// width: ${ (prop) => prop.katta ? "200px" : "100px" };
// height: ${ (prop) => prop.katta ? "200px" : "100px" };
// background-color: lightgreen;
// border: 3px solid green;
// `

// export const Content = styled(Box)`
// width: 150px;
// height: 150px;
// `
function getSize({ type }) {
  switch (type) {
    case "Large": return "200px";
    case "Medium": return "150px";
    case "Small": return "100px";
    default: return "50px";
  }
};
function getBG({ type }) {
  switch (type) {
    case "Large": return "lightgreen";
    case "Medium": return "lightcoral";
    case "Small": return "lightblue";
    default: return "black";
  }
}

export const Box = styled.div`
width:${ getSize };
height:${ getSize };
background-color:${ getBG };
  border: 3px solid red;
`
