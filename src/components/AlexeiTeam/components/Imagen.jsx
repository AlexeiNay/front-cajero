import React from 'react'

export default function Imagen(props) {
  return (
    <a href={props.home} className='Logo'>
      <img src={props.img} width={props.size} height={props.size} alt="Logo" />
      <p>{props.text}</p>
    </a>
  )
}
