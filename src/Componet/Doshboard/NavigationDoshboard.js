import { HomeMajor } from "@shopify/polaris-icons";
import { Navigation } from "@shopify/polaris";

export const NavigationDoshboard = (
  <Navigation location="/">
    <Navigation.Section
      separator
      items={[
        {
          label: "Dashboard",
          icon: HomeMajor,
        },
      ]}
    />
  </Navigation>
);
