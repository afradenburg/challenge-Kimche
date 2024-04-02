import React from "react";
import { CardStyle, Image } from "../styledComponents/cardStyled";
import { Link} from "react-router-dom"

export const Card =  ({ character }) => {
  const { name, image, id } = character;
  
  return (
    <CardStyle>
      <p>{name}</p>
      <Link to={`/detail/${id}`}>
      <Image src={image} alt={name} />
      </Link>
    </CardStyle>
  );
};
