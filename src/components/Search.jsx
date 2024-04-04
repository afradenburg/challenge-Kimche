import { SearchStyled } from "../styledComponents/searchStyled";
import { InputStyled } from "../styledComponents/inputStyled";

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
      <h2>filtros:</h2>
      <div>
        <label htmlFor="species">Selecciona una opción:</label>
        <select
          id="species"
          value={searchTerm.specie}
          onChange={handleSelectChange}
          name="specie"
        >
          <option value="">Selecciona una opción</option>
          {speciesList.map((specie) => (
            <option key={specie} value={specie}>
              {specie}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="genders">Selecciona una opción:</label>
        <select
          id="genders"
          value={searchTerm.gender}
          onChange={handleSelectChange}
          name="gender"
        >
          <option value="">Selecciona una opción</option>
          {gendersList.map((gender) => (
            <option key={gender} value={gender}>
              {gender}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="status">Selecciona una opción:</label>
        <select
          id="status"
          value={searchTerm.status}
          onChange={handleSelectChange}
          name="status"
        >
          <option value="">Selecciona una opción</option>
          {statusList.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button onClick={()=>handleResetSearchTerm()}>Reset</button>
      </div>
    </SearchStyled>
  );
}


