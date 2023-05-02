import styled from "styled-components";


import { NavLink } from "react-router-dom/cjs/react-router-dom";


export const Container = styled.div`
width: 100%;
height: 60px;
display: flex;
justify-content: space-evenly;
align-items: center;
background: #333;
`
const active = { color: 'red' }

export const List = styled(NavLink).attrs(() => { return { activeStyle: active } })`
color: white;
font-size: 20px;
text-decoration: none;
`