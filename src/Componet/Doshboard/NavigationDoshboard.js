import {
  HomeMajor,
  TransportMajor,
  ArrowLeftMinor,
} from "@shopify/polaris-icons";
import { Navigation } from "@shopify/polaris";

export const NavigationDoshboard = (
  <Navigation location="/">
    <Navigation.Section
      items={[
        {
          label: "Back to Shopify",
          icon: ArrowLeftMinor,
        },
      ]}
    />
    <Navigation.Section
      separator
      items={[
        {
          label: "Dashboard",
          icon: HomeMajor,
        },
        {
          label: "SpaceX",
          icon: TransportMajor,
        },
      ]}
    />
  </Navigation>
);
