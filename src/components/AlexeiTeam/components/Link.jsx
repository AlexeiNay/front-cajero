import styled from "styled-components";
import React from 'react'

const Link = styled.a`
   display:flex;
   align-content: center;
   width: 100%;
   margin: 0;
   color: white;
   font-size: 16px;
   height: 50px;
   font-family: "Montserrat", sans-serif;
   :link { text-decoration: none; }
   :visited { text-decoration: none; }
   :hover { 
       background-color: #5072A7;
    }
        
   transition: 0.5s all ease-out ;

`

const Div = styled.div`
    transition: 0.5s transform ease-out ;
    width:100%;
    padding: 1rem;
    &:hover{
        transform: translate(10px, 0px);
    }
`

export default function Liga(props) {
  return (
    <Link href={props.url} >
        <Div>
            <i className={props.icon}></i><span style={{marginLeft:"5px"}}>&nbsp;{props.text}</span>
        </Div>
    </Link>
  )
}

