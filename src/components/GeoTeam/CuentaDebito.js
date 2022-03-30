import React, { Component } from 'react'
import Button from './common/Button'
import Container from './common/Container'
import Input from './common/Input'
import Label from './common/Label'

export default class CuentaDebito extends Component {
  render() {
    return (
      <Container>
          <form>
            <h1>Datos Tarjeta</h1>
            <Container>
            <Label title ="Número de tarjeta:"/>
            <Input></Input>
            <Label title = "Comision:"/>
            <Input></Input>
            <Label title = "Fecha Expiración:"/>
            <Input></Input>
            </Container>

            <h1>Datos Personales</h1>
            <Container>
            <Label title ="Nombre:"/>
            <Input></Input>
            <Label title = "Apellido:"/>
            <Input></Input>
            <Label title = "RFC:"/>
            <Input></Input>
            <Label title = "Fecha de Nacimiento:"/>
            <Input></Input>
            <Label title = "Genero:"></Label> 
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            </Container>

            <Container>
            <Label title = "Domicilio"/>
            <Input/>
            <Label title= "Número Exterior"l/>
            <Input/>
            <Label title = "Número Interior"l/>
            <Input/>
            <Label title = "Código Postal"l/>
            <Input/>
            <Container/>

            <Container>
            <Label title = "Colonia"l/>
            <Input/>
            <Label title = "Municipio"l/>
            <Input/>
            <Label title = "Ciudad"l/>
            <Input/>
            <Label title = "Estado"l/>
            <Input/>
            </Container>

            <Container>
            <Label title = "Email"/>
            <Input/>
            <Label title = "Telefono Casa"/>
            <Input/>
            <Label title = "Celular"/>
            <Input/>
            <Button leyenda ="Adjuntar Documentación" />
            </Container>

            <h1>Beneficiarios</h1>
            <Container>
            <Label title = "Nombre"/>
            <Input/>
            <Label title = "Parentesco"/>
            <Input/>
            <Label title = "Fecha Nacimiento"/>
            <Input/>
            <Label title = "Telefono"/>
            <Input/>
            <Label title = "Email"/>
            <Input/>
            <Label title = "Porcentaje"/>
            <Input/>
            </Container>

            <Container>
            <Label title = "Nombre"/>
            <Input/>
            <Label title = "Parentesco"/>
            <Input/>
            <Label title = "Fecha Nacimiento"/>
            <Input/>
            <Label title = "Telefono"/>
            <Input/>
            <Label title = "Email"/>
            <Input/>
            <Label title = "Porcentaje"/>
            <Input/>
            </Container>

            <Container>
            <Label title = "Nombre"/>
            <Input/>
            <Label title = "Parentesco"/>
            <Input/>
            <Label title = "Fecha Nacimiento"/>
            <Input/>
            <Label title = "Telefono"/>
            <Input/>
            <Label title = "Email"/>
            <Input/>
            <Label title = "Porcentaje"/>
            <Input/>
            </Container>

            <Container>
              <Button leyenda ="Cancelar"/>
              <Button leyenda ="Dar de Alta"/>
            </Container>
    

            </Container>
            
            







          </form>
      </Container>
    )
  }
}
