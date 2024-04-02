import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const DetailCard = () => {
  const [cardDetail, setCardDetail] = useState([]);
  const {id} = useParams()

  useEffect(() => {
    const detail = async () => {
      try {
        const response = await fetch("https://rickandmortyapi.com/graphql", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: `
                query  {
                  character(id: ${id}) {
                    name
                    status
                    species
                    gender
                  }
                }
              `,
          }),
        });
        const result = await response.json();
        const fetchedCharacters = result.data.character;
        if (fetchedCharacters) {
          setCardDetail(fetchedCharacters);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    detail();
  }, []);

  return (
    <div>
      <h1>{cardDetail.name}</h1>
    </div>
  );
};
