import React, { useState, useEffect } from 'react'
import "./modal.css";

export const Modal = ({ isOpen, setIsOpen, setSelectCharacter, selectCharacter }) => {
  const { name, image, gender, status, location, species } = selectCharacter
  
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
        <button className='button' onClick={handleModal} >X</button>
        <h1>I am {name}</h1>
          <img className="img" src={image} alt={name} />
          <p>my gender is {gender}</p>
          <p>my specie is {species}</p>
          <p>I am {status}</p>
          <p>I'm from {location?.name}</p>
      </div>
    </div>
  )
}
