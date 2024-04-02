import React, { useEffect, useState } from "react";
import { Characters } from "./components/Characters";
import Search from "./components/Search";
import { getCharacters } from "./services/rickAndMortyService";
import { Modal } from "./components/modal/Modal";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [characters, setCharacters] = useState([]);
  const [selectCharacter, setSelectCharacter] = useState({})
  const [isOpen, setIsOpen] = useState(false);

  const searchCharacterHandler = async (term) =>{
    setCharacters(await getCharacters(term))
  }
  
  useEffect(()=>{
    if(searchTerm) searchCharacterHandler(searchTerm) 
  },[searchTerm])

  return (
    <>
      <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <Characters characters={characters} setSelectCharacter={setSelectCharacter} />
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} selectCharacter={selectCharacter} setSelectCharacter={setSelectCharacter} />
    </>
  );
}

export default App;
