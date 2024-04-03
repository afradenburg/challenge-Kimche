export const getCharacters = async (term, object) => {
  try {
    let allCharacters = []; 
    const totalPages = 3; 

    if (term && term.length !== 0) {
      const queryByName = `
        query {
          characters (filter: { name: "${term}" }) {
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

      const responseByName = await fetch("https://rickandmortyapi.com/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: queryByName }),
      });
      const resultByName = await responseByName.json();
      return resultByName.data.characters.results; 
    }

    for (let page = 1; page <= totalPages; page++) {
      const filterQuery = {
        query: `
          query ($page: Int, $getStatus: String, $getSpecies: String, $getGender: String) {
            characters(page: $page, filter: { status: $getStatus, species: $getSpecies, gender: $getGender }) {
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
          page,
          getStatus: object.getStatus ?? "", 
          getSpecies: object.getSpecies ?? "",
          getGender: object.getGender ?? "",
        },
      };

      const requestBody = JSON.stringify(filterQuery);

      const response = await fetch("https://rickandmortyapi.com/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: requestBody,
      });

      const result = await response.json();
      const fetchedCharacters = result.data.characters.results;
      
      allCharacters = allCharacters.concat(fetchedCharacters);
    }

    return allCharacters; 
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; 
  }
};

