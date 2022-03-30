import React from 'react'
import Campo from './dahsboards/Campo';
import Label from './dahsboards/Label';
import Tittle from './dahsboards/Tittle';
import Button from './dahsboards/Button';

const ReplaceCard = () => {

  return (
    <>
        <Tittle texto="Request a card replacement"/>
        <form>
            <Label texto="Username"/><br/>
            <Campo placeholder="Input manager's username"/><br/>
            <Label texto="Password"/><br/>
            <Campo placeholder="Please enter your password"/><br/>
            <Button texto="Cancel"/>
            <Button texto="Acess"/>
        </form>
    </>
  )
}

export default ReplaceCard