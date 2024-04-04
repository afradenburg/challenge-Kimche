import React from "react";
import { useState } from "react";
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from "./services/querysService";
import { Characters } from "./components/Characters";
import Search from "./components/Search";
import { Modal } from "./components/modal/Modal";
import Pager from "./components/Pager";
import { Header } from "./styledComponents/headerStyled";
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
  const [selectCharacter, setSelectCharacter] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [speciesList, setSpeciesList] = useState([]);
  const [gendersList, setGendersList] = useState([]);
  const [statusList, setStatusList] = useState([]);

  const { loading, data } = useQuery(GET_CHARACTERS, {
    variables: { term: searchTerm.term || null, specie: searchTerm.specie || null, gender: searchTerm.gender || null, status: searchTerm.status || null, page: searchTerm.page || 1 },
  })

  
  return (
    <>
      <Header>
        <Search 
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
          speciesList={[...speciesList]}
          setSpeciesList={setSpeciesList}
          gendersList={[...gendersList]}
          setGendersList={setGendersList}
          statusList={[...statusList]}
          setStatusList={setStatusList}
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
