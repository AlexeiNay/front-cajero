import React, { Component } from 'react'
import Label from './common/Label'
import Input from './common/Input'
import Div from './common/Div'
import Container from './common/Container'
import Button from './common/Button'

export default class CuentaCredito extends Component {
  render() {
    return (
      <div>
        <form>
          <h1>Cuenta Nueva</h1>

            <Container>
              <Label title="Detalles de cuenta"/>
              <Label title="Fecha "/>
            </Container><br/>
           
            <Container>
              <Label title="Tipo de cuenta "/>
              <Input type="text" placeholder=" "/>

              <Label title="Numero de Plastico "/>
              <Input type="text" placeholder=" "/>


              <Label title="Comision"/>
              <Input type="number" placeholder=" "/>

            </Container><br/>

            <Container>
              <Label title="Limite de credito"/>
              <Input type="text" placeholder=" "/>

              <Label title="Numero de cuenta"/>
              <Input type="text" placeholder=" "/>


              <Label title="Status"/>

              <select>
                <option value="Autorizada">Autorizada</option>
                <option value="No autorizada">No autorizada</option>
                <option value="Suspendida">Suspendida</option>
              </select>

            </Container><br/>
        
          <h1>Datos del cliente</h1>
            <Container>
              <Label title="Nombre"/>
              <Input type="text" placeholder=" "/>

              <Label title="Apellido"/>
              <Input type="text" placeholder=" "/>

              <Label title="Genero"/>
              <select>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
              </select>

            </Container><br/>

            <Container>

              <Label title="Domicilio"/>
              <Input type="text" placeholder=" "/>

              <Label title="Ext"/>
              <Input type="text" placeholder=" "/>

              <Label title="Int"/>
              <Input type="text" placeholder=" "/>

              <Label title="Colonia"/>
              <Input type="text" placeholder=" "/>

            </Container><br/>

            <Container>
              <Label title="Codigo postal"/>
              <Input type="text" placeholder=" "/>


              <Label title="Ciudad"/>
              <Input type="text" placeholder=" "/>


              <Label title="Estado"/>
              <Input type="text" placeholder=" "/>
            </Container><br/>

            <Container>
              <Label title="Telefono"/>
              <Input type="text" placeholder=" "/>


              <Label title="Celular"/>
              <Input type="text" placeholder=" "/>

              <Label title="Email"/>
              <Input type="email" placeholder=" "/>

            </Container><br/>

            <Button leyenda="Adjuntar documento"/>

          <h1>Beneficiarios</h1>
            <Container>
              <Label title="Nombre"/>
              <Input type="text" placeholder=" "/>


              <Label title="Apellidos"/>
              <Input type="text" placeholder=" "/>

              <Label title="Parentesco"/>
              <Input type="text" placeholder=" "/>

            </Container><br/>

            <Container>
              <Label title="Telefono"/>
              <Input type="text" placeholder=" "/>


              <Label title="Email"/>
              <Input type="email" placeholder=" "/>

              <Label title="Porcentaje"/>
              <Input type="text" placeholder=" "/>

            </Container><br/><br/>

            <Container>
              <Label title="Nombre"/>
              <Input type="text" placeholder=" "/>


              <Label title="Apellidos"/>
              <Input type="text" placeholder=" "/>

              <Label title="Parentesco"/>
              <Input type="text" placeholder=" "/>

            </Container><br/>

            <Container>
              <Label title="Telefono"/>
              <Input type="text" placeholder=" "/>


              <Label title="Email"/>
              <Input type="email" placeholder=" "/>

              <Label title="Porcentaje"/>
              <Input type="text" placeholder=" "/>

            </Container><br/>

            


            



        </form>
      </div>
    )
  }
}
