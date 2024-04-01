import React, { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";

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
      <div>
        {characters.map((character) => (
          <div key={character.id}>
            <p>{character.name}</p>
            <img
        src={character.image}
        alt={character.name}
      />
          </div>
        ))}
      </div>
    );
  };
  
  export default CharactersContainer;
