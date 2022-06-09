import React from "react";
import { Frame, Navigation } from "@shopify/polaris";
import { HomeMinor, OrdersMinor } from "@shopify/polaris-icons";

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
                url: "/",
                label: "Orders",
                icon: OrdersMinor,
                badge: "15",
              },
            ]}
          />
        </Navigation>
      </Frame>
    </div>
  );
};
