import React from 'react'
import Label from './common/Label'
import Input from './common/Input'
import Div from './common/Div'
import Container from './common/Container'
import Button from './common/Button'

export default function CreditoHipotecario() {
  return (
   
    /*<DivCenter>
      <Center>
       <Label title="Credito Hipotecario" />
       </Center>
       <CenterLeft>
        <Button title="regresar"/>
        </CenterLeft>
        <br></br>
        <p> Trabajo actual</p>
        <br></br>
        <p> Salario</p>
        <br></br>
        <p> Antiguedad del empleado</p>
        <br></br>
        <p> Zona de residencia</p>
       </DivCenter>*/
      
      <div>
        <h1>Solicitar Credito Hipotecario</h1>
        <div>
              <Label title="Trabajo actual "/>
              <Input type="text" placeholder=" "/><br/>

              <Label title="Salario"/>
              <Input type="text" placeholder=" "/>

              <Label title="Antiguedad del empleado "/>
              <Input type="text" placeholder=" "/>

              <Label title="Zona de recidencia "/>
              <Input type="text" placeholder=" "/>


              <Label title="Patrimonio"/>
              <select>
                <option value="Casa propia">Casa propia</option>
                <option value="Casa rentada">Casa rentada</option>
              </select>

              <Label title="Monto solicitado"/>
              <Input type="text" placeholder=" "/>

              <Button leyenda="Guardar"/>

        </div>
        <form>
        <Label title = " Aval 1"/>
        <Label title = "Nombre"/>
        <Input type="text" placeholder=" "/>
        <Label title = "Apellidos"/>
        <Input type="text" placeholder=" "/>
        <Label title = "Telefono"/>
        <Input type="text" placeholder=" "/>
        <Label title = "Dirección"/>
        <Input type="text" placeholder=" "/>
        <div>
        <Label title = " Propiedades"/>
        <Label title = "Valor Propiedad:"/>
        <div>
          <Button leyenda = "Adjuntar Coprobantes"/>
          <Button  leyenda = "+"/>
        </div>
        </div>

        
        </form>
      </div>
  
  )
}
