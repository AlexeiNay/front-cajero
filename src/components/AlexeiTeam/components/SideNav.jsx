import React from 'react'
import styled from 'styled-components'
import Imagen from './Imagen'

const Nav = styled.aside`
    position:absolute;
    top:0px;
    bottom:0px;
    left:0px;
    width:260px;
    background-color:#005596;
    overflow:hidden;            
`
const Hr = styled.hr`
    width:90%;           
`

export default function SideNav(props) {

    return (
        <Nav>
            <Imagen img="https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/64/ffffff/external-bank-fintech-kmg-design-detailed-outline-kmg-design.png" size='64px' text="Bantexico"/>
            <Hr/>
            {props.children}
        </Nav>
    )
}
