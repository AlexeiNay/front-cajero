import React, { Component } from 'react'
import styled from 'styled-components'

const _Container = styled.div`
    display: inline-block
`

export default class Container extends Component {
    constructor(props) {
        super(props)
    }
  render() {
    return (
      <_Container>{this.props.children}</_Container>
    )
  }
}