import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const CharactersQuery = () => {
  return (
    <Query
      query={gql`
        {
          characters {
            results {
              id
              name
              species
            }
          }
        }
      `}
      fetchPolicy="network-only"
    >
      {({ loading, error, data }) => {
        if (error) return <p>{error.message}</p>;
        if (loading) return <p>Loading...</p>;
        return data.characters.results.map((character) => {
          return (
          <>
          <p key={character.id}> {character.name}</p>          
          </>
          )
        });
      }}
    </Query>
  );
};

export const Home = () => {
  return (
    <div>
      <h1>Home rick como vas</h1>
      <CharactersQuery />
    </div>
  );
};
