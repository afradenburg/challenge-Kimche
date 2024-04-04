import React, { useState, useEffect } from "react";
import { FilterButton, FormContainer, StyledSelect, Subtitle } from "../styledComponents/filtersStyled";
import { useQuery } from "@apollo/client";
import { BUTTONS_FILTERS } from "../services/querysService";


export const Filters = ({speciesList, genderList, statusList, setFilters, setSearchTerm,}) => {
  const [selectedSpecies, setSelectedSpecies] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectStatus, setSelectStatus] = useState("");
  const [allCharacters, setAllCharacters] = useState([]);

  const queryOptions = {
    query: BUTTONS_FILTERS,
    variables: {
      page: 1,
    },
  };
  const { loading, error, data, fetchMore } = useQuery(queryOptions.query, {
    variables: queryOptions.variables,
    skip: !queryOptions.query,
    notifyOnNetworkStatusChange: true,
  });

  useEffect(() => {
    if (data) {
      const newCharacters = data.characters.results.filter(
        (newCharacter) =>
        !allCharacters.some(
          (existingCharacter) => existingCharacter.species === newCharacter.species
          )
      );

      setAllCharacters((prev) => [...prev, ...newCharacters]);

    }
  }, []);
  if (loading) return <Subtitle>Loading...</Subtitle>;
  if (error) return <p>Error :</p>;
  

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    setFilters({
      getSpecies: selectedSpecies,
      getGender: selectedGender,
      getStatus: selectStatus,
    });
  };

  const reset = () => {
    setSelectedGender("");
    setSelectStatus("");
    setSelectedSpecies("");
    setSearchTerm("");
  };

  return (
    <>
      <Subtitle>Puedes Filtrar Por:</Subtitle>
      <FormContainer onSubmit={handleFilterSubmit}>
        <div>
          {speciesList.length > 0 && (
            <StyledSelect
              value={selectedSpecies}
              onChange={(e) => setSelectedSpecies(e.target.value)}
            >
              {speciesList.map((species) => (
                <option key={species} value={species}>
                  specie {species}
                </option>
              ))}
            </StyledSelect>
          )}
        </div>

        <div>
          {genderList.length > 0 && (
            <StyledSelect
              value={selectedGender}
              onChange={(e) => setSelectedGender(e.target.value)}
            >
              {genderList.map((gender) => (
                <option key={gender} value={gender}>
                  gender {gender}
                </option>
              ))}
            </StyledSelect>
          )}
        </div>
        <div>
          {statusList.length > 0 && (
            <StyledSelect
              value={selectStatus}
              onChange={(e) => setSelectStatus(e.target.value)}
            >
              {statusList.map((status) => (
                <option key={status} value={status}>
                  status {status}
                </option>
              ))}
            </StyledSelect>
          )}
        </div>

        <FilterButton type="submit">Filtrar</FilterButton>
        <FilterButton style={{ backgroundColor: "red" }} onClick={reset}>
          {" "}
          Limpar Filtros
        </FilterButton>
      </FormContainer>
    </>
  );
};
