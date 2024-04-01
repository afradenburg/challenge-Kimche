import React from 'react'
import { CardStyle, Image } from '../styledComponents/cardStyled';

export const Card = ({character}) => {
    const {name, image} = character;
  return (
    <CardStyle>
        <p>{name}</p>
        <Image src={image} alt={name} />
    </CardStyle>
  )
}
