import React from "react";
import { SearchStyled } from "../styledComponents/searchStyled";

export default function Search({ setSearchTerm, searchTerm }) {
  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };  

  return (
    <SearchStyled className="search">
      <input
      type="text"
      placeholder="Search by name"
      value={searchTerm}
      onChange={handleSearchInput}
    />
    </SearchStyled>
  );
}
