import { gql } from "@apollo/client";

export const spacexQuery = gql`
  {
    ships(limit: 10) {
      image
      id
      name
      type
    }
  }
`;
