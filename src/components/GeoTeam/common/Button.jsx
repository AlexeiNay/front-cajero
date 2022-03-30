import React, { Component } from 'react'
import styled from  'styled-components';

const _Button = styled.button`
    width: 10%;
    margin: 20px;
    font-size: 1em;
    &:focus {
        outline: none;
    }
`;

export default class Button extends Component {
  constructor(props) {
    super(props)
  }  

  render() {     
    return (
        <_Button>{this.props.leyenda}</_Button>
    )
  }
}