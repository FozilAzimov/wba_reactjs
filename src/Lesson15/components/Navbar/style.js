import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const Container = styled.div`
width: 100%;
height: 60px;
background: black;
display: flex;
justify-content: space-evenly;
align-items: center;
.active{
  color: coral;
}
`

export const Item = styled(NavLink)`
color: white;
font-size: 20px;
text-decoration: none;
`
