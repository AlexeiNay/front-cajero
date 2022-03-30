import React from 'react'
import styled from "styled-components";
import Tittle from './dahsboards/Tittle';
import Campo from './dahsboards/Campo';
import Label from './dahsboards/Label';
import Button from './dahsboards/Button';

const Deposit = () => {

  return (
    <div className='divComponent'>
      <Tittle texto="Deposit Account"/>
      <form>
        <Label texto="Client Name"/>
        <Campo placeholder=""/>
        <Label texto="Beneficiary Name"/>
        <Campo placeholder=""/>
        <Label texto="Account number"/>
        <Campo placeholder=""/>
        <Label texto="Amount of money"/>
        <Campo placeholder=""/>
        <Button  texto="Deposit"/>
      </form>
    </div>
  )
}

export default Deposit