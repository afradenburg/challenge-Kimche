import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query characters ($term: String, $specie: String, $gender: String, $status: String, $page: Int) {
    characters(page: $page, filter: { name: $term, species: $specie, gender: $gender, status: $status }) {
      results {
        id,
        name,
        species,
        gender,
        image,
        status,
        type,
        location {
          name
        },
      },
      info {
        count
        pages
      }
    }
  }
`;