import React from "react";
import { useQuery } from "@apollo/client";
import { spaceX_Query } from "./spaceX_Query";
import { MediaCard } from "@shopify/polaris";

export const SpaceX = () => {
  const { loading, error, data } = useQuery(spaceX_Query);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( </p>;

  return (
    <div>
      <h1>SpaceX launches</h1>
      <ul>
        {data.ships.map((ships) => (
          <MediaCard title={ships.name} key={ships.id}>
            <img
              overflow="auto"
              alt=""
              width="100%"
              height="100%"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              src={ships.image}
            />
          </MediaCard>
        ))}
      </ul>
    </div>
  );
};
