export const getCharacters = async (term) => {
   
  const getStatus = "Alive";
  const getSpecies = "";
  const getGender = "";
  try {
    const filterQuery = {
      query: `
        query ($getStatus: String, $getSpecies: String, $getGender: String) {
          characters(filter: { status: $getStatus, species: $getSpecies, gender: $getGender }) {
            results {
              id
              name
              species
              gender
              image
              status
              type
              location {
                name
              }
            }
          }
        }`,
      variables: {
        getStatus: getStatus,
        getSpecies: getSpecies,
        getGender: getGender,
      },
    };
    const requestBody = JSON.stringify({
      query: filterQuery.query,
      variables: filterQuery.variables,
    });

    const query = `
    query {
      characters (filter: { name: "${term}"} ){
          results {
          id
          name
          species
          gender
          image
          status
          type
          location {
            name
          }
        }
      }
    }
  `;

    if (term.length !== 0) {
      const response = await fetch("https://rickandmortyapi.com/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: query,
        }),
      });
      const result = await response.json();
      // console.log(result.data);
      const fetchedCharacters = result.data.characters.results;
      if (fetchedCharacters) {
        return fetchedCharacters;
      }
    }
    const response = await fetch("https://rickandmortyapi.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: requestBody,
    });
    const result = await response.json();
    const fetchedCharacters = result.data.characters.results;
    if (fetchedCharacters) {
      return fetchedCharacters;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
