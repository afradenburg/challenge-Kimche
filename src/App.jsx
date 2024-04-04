import React from "react";
import { useEffect, useState } from "react";
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from "./services/querysService";
import { Characters } from "./components/Characters";
import Search from "./components/Search";
import { Modal } from "./components/modal/Modal";
import { Header } from "./styledComponents/headerStyled";
import Pager from "./components/Pager";
import { Subtitle } from "./styledComponents/filtersStyled";

const initialSearchTerm = {
  term: "",
  specie: "",
  gender: "",
  status: "",
  page: 1,
}

function App() {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { term: searchTerm.term || null, specie: searchTerm.specie || null, gender: searchTerm.gender || null, status: searchTerm.status || null, page: searchTerm.page || 1 },
  })
  const [selectCharacter, setSelectCharacter] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [speciesList, setSpeciesList] = useState([]);
  const [gendersList, setGendersList] = useState([]);
  const [statusList, setStatusList] = useState([]);

  useEffect(()=>{
    const species = new Set(data?.characters?.results.map(character => character.species))
    setSpeciesList(species)
  }, [data])

  useEffect(()=>{
    const genders = new Set(data?.characters?.results.map(character => character.gender))
    setGendersList(genders)
  }, [data])

  useEffect(()=>{
    const status = new Set(data?.characters?.results.map(character => character.status))
    setStatusList(status)
  }, [data])

  if (error) return <p>Error : {error.message}</p>;
  return (
    <>
      <Header>
        <Search 
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
          speciesList={[...speciesList]}
          gendersList={[...gendersList]}
          statusList={[...statusList]}
        />
      </Header>
      {loading ? 
        <Subtitle>Loading...</Subtitle> :
        <>
          <Characters
            characters={data.characters.results}
            setSelectCharacter={setSelectCharacter}
          />
          <Pager 
            infoPage={data.characters.info} 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm} 
          />
        </>
      }
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
