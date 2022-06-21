import React from "react";
import { useQuery } from "@apollo/client";
import { spacexQuery } from "../../../GraphQl/spacexQuery";
import {
  Avatar,
  ResourceItem,
  ResourceList,
  TextStyle,
  Card,
  Page,
} from "@shopify/polaris";
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

  const items = data.ships.map((ship) => {
    return {
      id: ship.id,
      name: ship.name,
      image: ship.image,
      type: ship.type,
    };
  });

  const renderItem = (item) => {
    const media = <Avatar size="large" name={item.name} source={item.image} />;
    return (
      <ResourceItem id={item.id} media={media}>
        <h3>
          <TextStyle variation="strong">{item.name}</TextStyle>
        </h3>
        <div>{item.type}</div>
      </ResourceItem>
    );
  };

  return (
    <div className="spaceX">
      <h1 className="header">
        <strong>SpaceX Ships</strong>
      </h1>
      <Page key="ships">
        <Card>
          <ResourceList
            resourceName={{ singular: "ship", plural: "ships" }}
            items={items}
            renderItem={renderItem}
          />
        </Card>
      </Page>
    </div>
  );
};
