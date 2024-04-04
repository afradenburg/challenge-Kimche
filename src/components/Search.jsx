import React from "react";
import { SearchStyled } from "../styledComponents/searchStyled";
import { InputStyled } from "../styledComponents/inputStyled";
import { StyledSelect, Subtitle } from "../styledComponents/filtersStyled";

export default function Search({
  setSearchTerm,
  searchTerm,
  speciesList,
  gendersList,
  statusList,
}) {
  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    setSearchTerm({ ...searchTerm, [name]: value, page: 1 });
  };
  const handleResetSearchTerm = () => {
    setSearchTerm({
      term: "",
      specie: "",
      gender: "",
      status: "",
      page: 1,
    });
  };

  return (
    <SearchStyled className="search">
      <div>
        <InputStyled
          type="text"
          placeholder="Search by name"
          value={searchTerm.term}
          onChange={handleSelectChange}
          name="term"
        />
      </div>
      <Subtitle>can you filter by:</Subtitle>
      <div>
        <StyledSelect
          id="species"
          value={searchTerm.specie}
          onChange={handleSelectChange}
          name="specie"
        >
          <option value="">Select an option</option>
          {speciesList.map((specie) => (
            <option key={specie} value={specie}>
              {specie}
            </option>
          ))}
        </StyledSelect>
      </div>
      <div>
        <StyledSelect
          id="genders"
          value={searchTerm.gender}
          onChange={handleSelectChange}
          name="gender"
        >
          <option value="">Selecciona an option</option>
          {gendersList.map((gender) => (
            <option key={gender} value={gender}>
              {gender}
            </option>
          ))}
        </StyledSelect>
      </div>
      <div>
        <StyledSelect
          id="status"
          value={searchTerm.status}
          onChange={handleSelectChange}
          name="status"
        >
          <option value="">Select an option</option>
          {statusList.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </StyledSelect>
      </div>
      <div>
        <button onClick={()=>handleResetSearchTerm()}>Reset</button>
      </div>
    </SearchStyled>
  );
}


