import styled from 'styled-components'

export const Containerbtnnew = styled.section`
 @media only screen and (max-width: 500px) {

 }
 @media (min-width: 500) and (max-width: 1000px) {
 }
 @media only screen and (min-width: 1000px) {
  background-color: #3d0499;
  border-radius:100px;
  height: 40px;
  width:40px;
  display:flex;
  justify-content:center;
  align-items:center;
  position:absolute;
  z-index:10;
  left:93%;
  top:85%;
  box-shadow: 0px 3px 5px #333;
  cursor:pointer;
  :hover{
     background:#0abde3;
     color:#fff;
      -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  }
  }
 }

`;

