import React from "react";
import { CardStyled } from "../styledComponents/cardsStyled";
import { Character } from "./Character";
import { Subtitle } from "../styledComponents/filtersStyled";

export const Characters = ({ characters, setSelectCharacter }) => {
  return (
    <CardStyled className="characters">
      {characters.length === 0 ? (
        <Subtitle style={{ alignItems: "center" }}>
          Buscando Personajes
        </Subtitle>
      ) : (
        characters.map((character) => (
          <Character
            key={character.id}
            character={character}
            setSelectCharacter={setSelectCharacter}
          />
        ))
      )}
    </CardStyled>
  );
};