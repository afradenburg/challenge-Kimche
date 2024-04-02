import React from "react";
import { SearchStyled } from "../styledComponents/searchStyled";
import { useState } from "react";

export default function SearchBar() {

  const [searchInput, setSearchInput] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <SearchStyled>
      <input
      type="text"
      placeholder="Search by name"
      value={searchInput}
      onChange={handleSearchInputChange}
    />
    </SearchStyled>
  );
}
