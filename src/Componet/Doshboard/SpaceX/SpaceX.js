import React from "react";
import { useQuery } from "@apollo/client";
import { spacexQuery } from "../../../GraphQl/spacexQuery";
import { MediaCard, Page } from "@shopify/polaris";
import "./spaceX.css";

export const SpaceX = () => {
  const { loading, error, data } = useQuery(spacexQuery);
  if (loading)
    return (
      <p className="paragraph">
        <strong>loading....</strong>
      </p>
    );
  if (error)
    return (
      <p className="paragraph">
        <strong>{error}</strong>
      </p>
    );

  return (
    <div className="spaceX">
      <h1 className="header">
        <strong>SpaceX Ships</strong>
      </h1>
      {data.ships.map((ships) => (
        <Page key={ships.id}>
          <MediaCard
            portrait
            sectioned
            title={ships.name}
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
