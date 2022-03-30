import React, { Component } from 'react'

export class Button extends Component {
    /*constructor(props){
        super(props)
    }*/

    render() {
        return (
        <button type="button" onClick={this.props.click}> {this.props.message} </button>
        )
    }
}

export default Button