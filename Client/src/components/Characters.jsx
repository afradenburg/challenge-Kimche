import React, { useEffect, useState } from "react";
import { CardStyled } from "../styledComponents/cardsStyled";
import { Character } from "./Character";

export const Characters = ({ characters, setSelectCharacter }) => {
  return (
    <CardStyled className="characters">
      {characters?.map((character) => (
        <Character
          key={character.id}
          character={character}
          setSelectCharacter={setSelectCharacter}
        />
      ))}
    </CardStyled>
  );
};
