import React from "react";
import { Frame, Navigation } from "@shopify/polaris";
import { HomeMinor, TransportMajor } from "@shopify/polaris-icons";

export const Doshboard = () => {
  return (
    <div>
      <Frame>
        <Navigation location="/">
          <Navigation.Section
            items={[
              {
                url: "/",
                label: "home",
                icon: HomeMinor,
              },
              {
                url: "/spaceX",
                label: "spaseX",
                icon: TransportMajor,
                badge: "12",
              },
            ]}
          />
        </Navigation>
      </Frame>
    </div>
  );
};
