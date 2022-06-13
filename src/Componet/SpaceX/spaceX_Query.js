import { gql } from "@apollo/client";

export const spaceX_Query = gql`
  {
    ships(limit: 10) {
      image
      id
      name
      type
    }
  }
`;
