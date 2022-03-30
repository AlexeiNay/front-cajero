import React, { Component, useState } from 'react'
import Calendar from 'react-calendar';

export default class VistaCuentas extends Component {
    
    state = {
      date: new Date(),
    }

    onChange = date => this.setState({ date })

  render() {
    return (
      <div class="cuenta-contenedor">
          <h2>Cuentas</h2>
          <div class="boton-volver">
            <button class="button  volver">Volver</button> 
          </div>
          <div class="contenedor-input">
            <label class="l1">No. de cuenta</label>
			      <input class="text  input1" name="No. de cuenta"></input>
            <label class="l2">No. de ejecutivo</label>
			      <input class="text  input2" name="No. de ejecutivo"></input>
          </div>
          <div class="calendario-contenedor">
            <input type="date"></input>
          </div>
          <div class="tablas-contenedor">
          <table class="default">
            <tr>
              <td>Cuenta</td>
              <td>Fecha</td>
              <td>Ejecutivo</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
          </div>
        </div>
    )
  }
}
