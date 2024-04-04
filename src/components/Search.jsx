import React from "react";
import { SearchStyled } from "../styledComponents/searchStyled";
import { InputStyled } from "../styledComponents/inputStyled";

export default function Search({ setSearchTerm, searchTerm }) {
  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <SearchStyled className="search">
      <InputStyled
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearchInput}
      />
    </SearchStyled>
  );
}
