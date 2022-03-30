import React from 'react'
import styled from 'styled-components'

const _input = styled.input`

`

export default function Campo(props) {
  return (
    <>
      <_input onChange={props.cambio} type={props.tipo} name={props.nombre} placeholder={props.placeholder}/>
    </>
  )
}
