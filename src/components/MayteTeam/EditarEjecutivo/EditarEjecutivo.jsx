import React, { Component } from 'react'

export default class CrearEjecutivo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      input: {
        nombre: 'adrian', apellido: 'garcia', area: 'recepcion', puesto: 'resepcionista', sucursal: 'sucursal2'
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  // initializate

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
    const { nombre, apellido, area, puesto, sucursal } = this.state.input
    return (
      <article>
        <h3>Editar Ejecutivo</h3>
        <form onSubmit={this.handleSubmit}>

          <div>
            <label htmlFor="nombre">Nombre</label>
            <input required type="text" name="nombre" defaultValue={nombre} />
          </div>

          <div>
            <label htmlFor="apellido">Apellido</label>
            <input required type="text" name="apellido" defaultValue={apellido} />
          </div>

          <div>
            <label htmlFor="area">Área</label>
            <select required name="area" defaultValue={area}>
              <option value="">Selecciona una área</option>
              <option value="credito">Credito</option>
              <option value="recepcion">Recepcion</option>
            </select>
          </div>

          <div>
            <label htmlFor="puesto">Puesto</label>
            <select required name="puesto" defaultValue={puesto}>
              <option value="">Selecciona un puesto</option>
              <option value="gerente">Gerente</option>
              <option value="resepcionista">Recepcionista</option>
            </select>
          </div>

          <div>
            <label htmlFor="sucursal">Sucursal</label>
            <select required name="sucursal" defaultValue={sucursal}>
              <option value="">Selecciona una sucursal</option>
              <option value="sucursal1">Sucursal 1</option>
              <option value="sucursal2">Sucursal 2</option>
            </select>
          </div>

          <div>
            <input type="button" value="Cancelar" />
            <input type="submit" value="Editar Ejecutivo" />
          </div>
        </form>
      </article>
    )
  }
}
