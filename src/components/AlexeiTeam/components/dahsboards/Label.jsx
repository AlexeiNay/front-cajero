import React from 'react'
import styled from 'styled-components';

const _label = styled.label`

`

const Label = (props) => {
  return (
    <_label>{props.texto}</_label>
  )
}

export default Label