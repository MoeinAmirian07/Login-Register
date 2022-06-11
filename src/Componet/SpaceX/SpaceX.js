import React, { useEffect } from "react";
import { spaceX_Query } from "./spaceX_Query";

export const SpaceX = () => {
  useEffect(() => {
    fetch("https://api.spacex.land/graphql/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: spaceX_Query }),
    })
      .then((response) => response.json())
      .then((data) => {
        data.data.launchesPast.map((launches) => {
          console.log(launches.ships);
        });
      });
  }, []);

  return <div></div>;
};
