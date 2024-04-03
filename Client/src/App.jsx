import React, { useEffect, useState } from "react";
import { Characters } from "./components/Characters";
import Search from "./components/Search";
import { getCharacters } from "./services/rickAndMortyService";
import { Modal } from "./components/modal/Modal";
import { Filters } from "./components/Filters";
import { Header } from  "./styledComponents/selectStyled"

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [characters, setCharacters] = useState([]);
  const [selectCharacter, setSelectCharacter] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [speciesList, setSpeciesList] = useState([]);
  const [genderList, setGenderList] = useState([]);
  const [statusList, setStatusList] = useState([])
  const [updateCount, setUpdateCount] = useState(0);
  const [filters, setFilters] = useState({ getStatus: "", getSpecies: "", getGender: "" });

  const searchCharacterHandler = async (term, object) => {
    setCharacters(await getCharacters(term, object));
  };

  useEffect(() => {
    searchCharacterHandler(searchTerm, filters);
  }, [searchTerm]);

  useEffect(() => {
    if (updateCount > 2 && updateCount < 5 && characters.length > 0) {
      const uniqueSpecies = new Set(
        characters.map((character) => character.species)
      );
      setSpeciesList(Array.from(uniqueSpecies));

      const uniqueGender = new Set(
        characters.map((character) => character.gender)
      );
      setGenderList(Array.from(uniqueGender));
      
      const uniqueStatus = new Set(
        characters.map((character) => character.status)
      );
      setStatusList(Array.from(uniqueStatus));
    }
    if (characters.length > 0 && updateCount < 5)
      setUpdateCount((prevCount) => prevCount + 1);
  }, [characters, updateCount]);

  const filtersCharacterHandler = async (object) => {
    setCharacters(await getCharacters("", object))
  }

  useEffect(()=>{
    filtersCharacterHandler(filters)
  },[filters])

  return (
    <>
   <Header>
   <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <Filters
        speciesList={speciesList}
        genderList={genderList}
        statusList={statusList}
        setFilters={setFilters}
        setSearchTerm={setSearchTerm}
      />
   </Header>
      <Characters
        characters={characters}
        setSelectCharacter={setSelectCharacter}
      />
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectCharacter={selectCharacter}
        setSelectCharacter={setSelectCharacter}
      />
    </>
  );
}

export default App;
