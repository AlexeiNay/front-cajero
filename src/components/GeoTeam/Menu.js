import React, { Component } from 'react'
import Label from './common/Label'
import Input from './common/Input'
import Div from './common/Div'
import Container from './common/Container'
import Button from './common/Button'

export default class Menu extends Component {
  render() {
    return (
      <div>
          <Div>
            <h1>Cuentas</h1>

            <Button leyenda="Abrir cuenta de debito"/>
            <Button leyenda="Abrir cuenta de credito"/>
            <Button leyenda="Estados de cuenta"/>
            <Button leyenda="Cuentas de cliente"/>
          </Div>
          <Div>
            <h1>Creditos</h1>
            <Button leyenda="Abrir credito hipotecario"/>
          </Div>
      </div>
      
    )
  }
}
