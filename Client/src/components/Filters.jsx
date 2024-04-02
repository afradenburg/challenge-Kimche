import React, { useState } from "react";

export const Filters = ({speciesList, genderList, statusList, setFilters}) => {
  const [selectedSpecies, setSelectedSpecies] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectStatus, setSelectStatus] = useState("");

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    setFilters({
      getSpecies: selectedSpecies,
      getGender: selectedGender,
      getStatus: selectStatus,
    });
  };

  return (
    <div>
      <form onSubmit={handleFilterSubmit}>
        {speciesList.length > 0 && (
          <select
            value={selectedSpecies}
            onChange={(e) => setSelectedSpecies(e.target.value)}
          >
            {speciesList.map((species) => (
              <option key={species} value={species}>
                {species}
              </option>
            ))}
          </select>
        )}

        <div>
          {genderList.length > 0 && ( <select
              value={selectedGender}
              onChange={(e) => setSelectedGender(e.target.value)}
            >
              {genderList.map((gender) => (
                <option key={gender} value={gender}>
                  {gender}
                </option>
              ))}
            </select>
          )}
          <div>
            {statusList.length > 0 && (
              <select
                value={selectedGender}
                onChange={(e) => setSelectStatus(e.target.value)}
              >
                {statusList.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            )}
          </div>
        </div>

        <button type="submit">Filtrar</button>
      </form>
    </div>
  );
};
