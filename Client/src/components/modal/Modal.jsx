import React, { useState, useEffect } from 'react'
import "./modal.css";

export const Modal = ({ isOpen, setIsOpen, setSelectCharacter, selectCharacter }) => {
  const { name, image, gender, status, location } = selectCharacter
  
  const handleModal = () => {
    setIsOpen(!isOpen);
    setSelectCharacter({})
  }

  useEffect(()=>{
    if(Object.entries(selectCharacter).length !== 0) setIsOpen(true)
  },[selectCharacter])

  return (
    <div className={`modal ${!isOpen ? "hidden" : ""}`}>
      <div className='modal-content'>
        <button onClick={handleModal} >X</button>
        <h1>Soy {name}</h1>
        <img className="img" src={image} alt={name} />
        <p>mi genero es {gender}</p>
        <p>estoy {status}</p>
        <p>soy de {location?.name}</p>
      </div>
    </div>
  )
}
