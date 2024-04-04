import { gql } from '@apollo/client';

export const SEARCH_CHARACTERS_BY_NAME = gql`
  query SearchCharactersByName($name: String!) {
    characters(filter: { name: $name }) {
        info {
            count
            pages
            next
            prev
          }
      results {
        id
        name
        species
        gender
        image
      }
    }
  }
`;

export const FILTER_CHARACTERS = gql`
  query FilterCharacters($page: Int,  $getStatus: String, $getSpecies: String, $getGender: String) {
    characters(page: $page, filter: { status: $getStatus, species: $getSpecies, gender: $getGender }) {
      info {
        count
        pages
        next
        prev
      }
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

export const BUTTONS_FILTERS = gql`
  query BUTTONS_FILTERS($page: Int) {
    characters(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        species
        gender
        status
      }
    }
  }
`;
