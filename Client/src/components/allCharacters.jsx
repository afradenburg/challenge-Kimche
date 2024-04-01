import React, { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { CardStyled } from "../styledComponents/cards";
import { Card } from "./cardCharacter"

// const CHARACTERS_QUERY = gql`
//   query {
//     characters{
//       results {
//         id
//         name
//         species
//       }
//     }
//   }
// `;

const CharactersContainer = () => {
  // const { loading, error, data } = useQuery(CHARACTERS_QUERY);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://rickandmortyapi.com/graphql", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: `
                query {
                  characters {
                    results {
                      id
                      name
                      species
                      gender
                      image

                    }
                  }
                }
              `,
          }),
        });
        const result = await response.json();
        // console.log(result.data);
        const fetchedCharacters = result.data.characters.results;
        if (fetchedCharacters) {
          setCharacters(fetchedCharacters);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <CardStyled>
      {characters.map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </CardStyled>
  );
};

export default CharactersContainer;
