import React, { Component } from 'react'
import styled from  'styled-components';
  
const _Label = styled.label`
font-size: 1em;
text-align: center;
padding: 50px;
    &:focus {
        outline: none;
    }
`;


export default class Label extends Component {
    constructor(props) {
      super(props)
    }

    render() {
        return (
            <_Label>{this.props.title}</_Label>
        )
    }
}