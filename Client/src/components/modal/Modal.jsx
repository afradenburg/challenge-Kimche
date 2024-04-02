import React, { useState, useEffect } from 'react'
import "./modal.css";

export const Modal = ({ isOpen, setIsOpen, setSelectCharacter, selectCharacter }) => {
  const { image, name } = selectCharacter

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
        <p>{name}</p>
        <img src={image} alt={name} />
      </div>
    </div>
  )
}
