import React from 'react'
import styled from 'styled-components'

const _h1 = styled.h1`

`

const Tittle = (props) => {
  return (
    <_h1>{props.texto}</_h1>
  )
}

export default Tittle