import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { CardStyled } from "../styledComponents/cardsStyled";
import { CardStyle, Image } from "../styledComponents/cardStyled";
import { SEARCH_CHARACTERS_BY_NAME, FILTER_CHARACTERS } from "../services/querysService";
import { Subtitle } from "../styledComponents/filtersStyled";

const CharactersContainer = ({ term, object, setSelectCharacter }) => {
  const [allCharacters, setAllCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  let queryOptions = {};

  if (term && term !== "") {
    queryOptions = {
      query: SEARCH_CHARACTERS_BY_NAME,
      variables: { name: term },
    };
  } else if (object) {
    queryOptions = {
      query: FILTER_CHARACTERS,
      variables: {
        page: currentPage,
        getStatus: object.getStatus ?? "",
        getSpecies: object.getSpecies ?? "",
        getGender: object.getGender ?? "",
      },
    };
  }

  const { loading, error, data, fetchMore } = useQuery(queryOptions.query, {
    variables: queryOptions.variables,
    skip: !queryOptions.query,
    notifyOnNetworkStatusChange: true,
  });

  useEffect(() => {
    setAllCharacters([]);
    setCurrentPage(1);
  }, [term, object]);

  useEffect(() => {
    if (data) {
      const newCharacters = data.characters.results.filter(
        (newCharacter) =>
          !allCharacters.some(
            (existingCharacter) => existingCharacter.id === newCharacter.id
          )
      );

      setAllCharacters((prev) => [...prev, ...newCharacters]);

      if (currentPage < 3 && data.characters.info.next) {
        setCurrentPage((prevPage) => prevPage + 1);
      }
    }
  }, [data, currentPage]);

  useEffect(() => {
    if (currentPage > 1 && currentPage <= 3) {
      fetchMore({
        variables: {
          page: currentPage,
        },
      })
        .catch((error) => {
          console.error("Error fetching more characters:", error);
        });
    }
  }, [currentPage, fetchMore]);

  if (loading && !allCharacters.length) return <Subtitle>Loading...</Subtitle>;
  if (error) return <p>Error :</p>;

  return (
    <CardStyled>
      {allCharacters.map((character) => (
        <CardStyle key={character.id} onClick={() => setSelectCharacter(character)}>
          <p>{character.name}</p>
          <Image src={character.image} alt={character.name} />
        </CardStyle>
      ))}
    </CardStyled>
  );
};

export default CharactersContainer;
