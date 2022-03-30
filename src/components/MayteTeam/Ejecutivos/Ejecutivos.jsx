import React, { Component } from 'react';
import Button from './Button';

export class App extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.editExecutive = this.editExecutive.bind(this);
    this.deleteExecutive = this.deleteExecutive.bind(this);

    this.state = {
      searchName: '',
      dropValue: '',
    };
  }


  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  editExecutive(){
    console.log("Editar Ejecutivo");
  }

  deleteExecutive(){
    console.log("Borrar Ejecutivo");
  }

  createExecutive(){
    console.log("Crear ejecutivo");
  }




  render(){

    return(
      
      <article>

        <select name='dropValue' defaultValue="" onChange={this.handleChange}>
          <option value="ejecutivo 1">Ejecutivo 1</option>
          <option value="ejecutivo 2">Ejecutivo 2</option>
          <option value="ejecutivo 3">Ejecutivo 3</option>
        </select>


        <input type="search" name='searchName' value={this.state.searchName} onChange={this.handleChange}/>

        <Button message="Editar" click={this.editExecutive}/>
        <Button message="Eliminar" click={this.deleteExecutive}/>
        <Button message="Volver" click={this.back}/>
        <Button message="Crear Ejecutivo" click={this.createExecutive}/>

      </article>
    )
  }
}

export default App