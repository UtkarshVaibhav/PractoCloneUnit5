import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import style from './Container3Box.module.css';
const Boxes=styled.div`
width: fit-content;
margin: 10px;
`
const BoxWrapper=styled.div`
background-color: ${({color})=>color};
width: 200px;
height: 140px;
border-radius: 21px 21px 0 0;
cursor: pointer;
display: flex;
justify-content: center;
// @media all and (max-width: 425px)
// {
//   width: 32vw;
//   height: 15vh;
// }
`
const TextWrapper=styled.div`
background-color: white;
border-radius:  0 0 21px 21px;
padding: 30px 20px;
cursor: pointer;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 19px 0px;
margin-bottom: 20px;
width: 200px;
height: 150px;
h3{
  margin-bottom: 8px;
}
span{
  color: grey;
}
// @media all and (max-width: 425px)
// {
//   width: 32vw;
//   height:25vh;
// }
`
export const Container3Box = ({url,heading,desc,color,link}) => {
    const navigate=useNavigate();
  return (
      <Boxes onClick={()=>{navigate(`/${link}`)}}>
        <BoxWrapper color={color}>
            <img src={url} alt="" className={style.img}/>
        </BoxWrapper>
        <TextWrapper>
                <h3>{heading}</h3>
                <span>{desc}</span>
        </TextWrapper>
      </Boxes>
  )
}
