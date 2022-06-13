import React from "react";
import { useQuery } from "@apollo/client";
import { spaceX_Query } from "./spaceX_Query";
import { MediaCard, Page } from "@shopify/polaris";
import "./spaceX.css";

export const SpaceX = () => {
  const { loading, error, data } = useQuery(spaceX_Query);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( </p>;

  return (
    <div className="spaceX">
      <h1>
        <strong>SpaceX Ships</strong>
      </h1>
      {data.ships.map((ships) => (
        <Page>
          <MediaCard
            portrait
            sectioned
            title={ships.name}
            key={ships.id}
            description={`Type: ${ships.type}`}
            size="medium"
          >
            <img
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
        </Page>
      ))}
    </div>
  );
};
