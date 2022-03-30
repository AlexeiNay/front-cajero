import React, { Component } from 'react'
import styled from  'styled-components';
  
const _Div = styled.div`
flex-direction:column;
align-items:center;

`;


export default class Div extends Component {
    constructor(props) {
      super(props)
    }

    render() {
        return (
            <div>{this.props.children}</div>
        )
    }
}