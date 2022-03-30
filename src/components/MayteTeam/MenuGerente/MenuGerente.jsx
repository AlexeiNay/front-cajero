import React, { Component } from 'react'


export default class MenuGerente extends Component {
  render() {
    return (
        
      <div class="contenedor">
          <h2>Gerente</h2>
          <div class="boton">
              <button class="button  boton-cerrar">Cerrar sesión</button> 
          </div>
          <div class="contenedor-botones">
              <button class="button  boton1">Cuentas</button>
              <button class="button  boton2">Transacciones</button>
              <button class="button  boton3">Ejecutivos</button>
          </div>
      </div>
    )
  }
}

