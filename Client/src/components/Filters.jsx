import React, { useState } from "react";
import { FilterButton, FormContainer, StyledSelect, Subtitle } from "../styledComponents/selectStyled";

export const Filters = ({speciesList, genderList, statusList, setFilters}) => {
  const [selectedSpecies, setSelectedSpecies] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectStatus, setSelectStatus] = useState("");

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    setFilters({
      getSpecies: selectedSpecies,
      getGender: selectedGender,
      getStatus: selectStatus,
    });
    setSelectedGender("");
    setSelectStatus("");
    setSelectedSpecies("");
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
              <option key={species} value={species} >
               specie {species}
              </option>
            ))}
          </StyledSelect>
        )}
        </div>

        <div>
          {genderList.length > 0 && ( <StyledSelect
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
      </FormContainer>
    </>
  );
};
