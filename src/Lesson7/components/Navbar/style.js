import styled from 'styled-components';

export const Container = styled.div`
height: 64px;
background-color: #000;
display: flex;
justify-content: space-evenly;
align-items: center;
`

export const Item = styled.div`
color: #bbb;
font-size: 26px;
cursor: pointer;
transition: .2s;
:hover{
  color: white;
}
`