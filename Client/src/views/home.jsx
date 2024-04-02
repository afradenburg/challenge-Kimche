import React from "react";
import CharactersContainer from "../components/allCharacters";
import SearchBar from "../components/Navbar";


export const Home = () => {
  return (
    <div>
      <SearchBar/>
      <h1>Rick & Morty</h1>
      <CharactersContainer/>

    </div>
  );
};
