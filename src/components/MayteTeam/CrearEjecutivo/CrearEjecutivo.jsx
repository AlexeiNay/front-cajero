import React, { Component } from 'react'

export default class CrearEjecutivo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      input: {
        nombre: "",
        apellido: "",
        area: "",
        puesto: "",
        sucursal: ""
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit = async (e) => {
    e.preventDefault()

    // get data from form
    const data = new FormData(e.currentTarget);
    const formData = {
      nombre: data.get('nombre'),
      apellido: data.get('apellido'),
      area: data.get('area'),
      puesto: data.get('puesto'),
      sucursal: data.get('sucursal'),
    }
    this.setState({ input: { ...formData } })
    console.log(formData)
  }

  render() {
    return (
      <article>
        <h3>Crear Ejecutivo</h3>
        <form onSubmit={this.handleSubmit}>

          <div >
            <label htmlFor="nombre">Nombre</label>
            <input type="text" name="nombre" id="nombre" />
          </div>

          <div>
            <label htmlFor="apellido">Apellido</label>
            <input type="text" name="apellido" id="apellido" />
          </div>

          <div>
            <label htmlFor="area">Área</label>
            <select name="area" defaultValue="" id="area">
              <option value="">Selecciona una área</option>
              <option value="credito">Credito</option>
              <option value="recepcion">Recepcion</option>
            </select>
          </div>

          <div>
            <label htmlFor="puesto">Puesto</label>
            <select name="puesto" defaultValue="" id="puesto">
              <option value="">Selecciona un puesto</option>
              <option value="gerente">Gerente</option>
              <option value="resepcionista">Recepcionista</option>
            </select>
          </div>

          <div>
            <label htmlFor="sucursal">Sucursal</label>
            <select name="sucursal" defaultValue="" id="sucursal">
              <option value="">Selecciona una sucursal</option>
              <option value="sucursal1">Sucursal 1</option>
              <option value="sucursal2">Sucursal 2</option>
            </select>
          </div>

          <div>
            <input type="button" value="Cancelar" />
            <input type="submit" value="Crear Ejecutivo" />
          </div>
        </form>
      </article>
    )
  }
}
