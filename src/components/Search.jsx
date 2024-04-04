import React, {useEffect} from "react";
import { ResetStyled, SearchStyled } from "../styledComponents/searchStyled";
import { InputStyled } from "../styledComponents/inputStyled";
import { FormContainer, StyledSelect, Subtitle } from "../styledComponents/filtersStyled";
import { GET_FILTERS } from "../services/querysService";
import { useApolloClient } from "@apollo/client";

export default function Search({
  setSearchTerm,
  searchTerm,
  speciesList,
  gendersList,
  statusList,
  setSpeciesList,
  setGendersList,
  setStatusList
}) {
  const apolloClient = useApolloClient();

  useEffect(() => {
    const fetchButtons = async () => {
      const totalPages = 3; 
      let species = new Set(speciesList);
      let gender = new Set(gendersList);
      let status = new Set(statusList)

      try {
        for (let page = 1; page <= totalPages; page++) {
          const { data } = await apolloClient.query({
            query: GET_FILTERS,
            variables: { page },
          });

          const results = data.characters.results;
          results.forEach(result => {
            species.add(result.species);
            gender.add(result.gender);
            status.add(result.status);
          });
        }
        setSpeciesList([speciesList =>speciesList, ...species]);
        setGendersList([genderList =>genderList, ...gender]);
        setStatusList([statusList =>statusList, ...status])
      } catch (error) {
        console.log("Error al obtener buttons", error);
      }
    };

    fetchButtons();
  }, []);

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
      <FormContainer>
      <div>
        <StyledSelect
          id="species"
          value={searchTerm.specie}
          onChange={handleSelectChange}
          name="specie"
        >
          <option value="">Select an option Specie</option>
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
          <option value="">Selecciona an Gender</option>
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
          <option value="">Select an Status</option>
          {statusList.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </StyledSelect>
      </div>
      <div>
        <ResetStyled onClick={()=>handleResetSearchTerm()}>Reset</ResetStyled>
      </div>
    </FormContainer>
    </SearchStyled>

  );
}


