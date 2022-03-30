import React from 'react'
import styled from 'styled-components'

const _button = styled.button`

`

const Button = (props) => {
  return (
    <_button>{props.texto}</_button>
  )
}

export default Button