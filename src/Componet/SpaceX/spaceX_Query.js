export const spaceX_Query = `{
    launchesPast(limit: 12) {
      ships {
        name
        image
        id
      }
    }
  }
  `;
