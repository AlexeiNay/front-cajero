import React, { Component } from 'react'
import styled from  'styled-components';
  
const _Input = styled.input`
    width: 10%;
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
    font-size: 1em;
    box-shadow: inset 0px -3px 0px 0px rgba(187, 187, 187, 0.2);
    transition: box-shadow 0.2s ease-in;
`;


export default class Input extends Component {
    constructor(props) {
      super(props)
    }

    render() {
        return (
            <_Input type={this.props.type} placeholder={this.props.placeholder} onChange={this.props.Onchange}/>
        )
    }
}