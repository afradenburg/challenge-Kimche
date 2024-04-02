import React from "react";
import { CardStyle, Image } from "../styledComponents/cardStyled";

export const Character =  ({ character, setSelectCharacter }) => {
  const { name, image, id } = character;
  
  return (
    <CardStyle  onClick={()=>setSelectCharacter(character)}>
      <p>{name}</p>
      <Image src={image} alt={name} />
    </CardStyle>
  );
};
