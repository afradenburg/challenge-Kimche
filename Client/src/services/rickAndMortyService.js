export const getCharacters = async (term) => {
  try {
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
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
