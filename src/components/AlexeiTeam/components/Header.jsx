import React from 'react'
import styled from "styled-components";

const H = styled.header`
    display:fixed;
    width:calc(100%-260px);
    height:80px;
    background-color:#e9edf1;
`

export default function Header() {
  return (
    <>
    <H/>
    </>
  )
}
