import React, { useEffect, useState } from "react";
import { CardStyled } from "../styledComponents/cardsStyled";
import { Character } from "./Character";
import { Subtitle } from "../styledComponents/filtersStyled";

export const Characters = ({ characters, setSelectCharacter }) => {
  const [updateCount, setUpdateCount] = useState(0)
  const [subtitleText, setSubtitleText] = useState("Buscando personajes");

  useEffect(() => {
    if (characters.length === 0 && updateCount < 1) {
      setSubtitleText("Buscando Personajes");
      setUpdateCount((prevCount) => prevCount + 1)
    } else {
      setSubtitleText("No Hay Personajes Con Estas Caracteristicas");
    }
  }, [characters]);

  return (
    <CardStyled className="characters">
      {characters.length === 0 ? (
        <Subtitle style={{ alignItems: "center" }}>{subtitleText}</Subtitle>
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
