import { SpaceX } from "./SpaceX/SpaceX";
import React, { useState, useCallback } from "react";
import { Frame, TopBar, AppProvider } from "@shopify/polaris";

import { logo } from "./logo";
import { NavigationDoshboard } from "./NavigationDoshboard";
import { UserMenuSpaceXicon } from "./SpaceXicon/userMenuSpaceXicon";

export const Doshboard = () => {
  const [mobileNavigationActive, setMobileNavigationActive] = useState(false);

  const toggleMobileNavigationActive = useCallback(
    () =>
      setMobileNavigationActive(
        (mobileNavigationActive) => !mobileNavigationActive
      ),
    []
  );

  const topBarDoshboard = (
    <TopBar
      showNavigationToggle
      userMenu={<UserMenuSpaceXicon />}
      onNavigationToggle={toggleMobileNavigationActive}
    />
  );

  return (
    <div style={{ height: "500px" }}>
      <AppProvider
        i18n={{
          Polaris: {
            Avatar: {
              label: "Avatar",
              labelWithInitials: "Avatar with initials {initials}",
            },

            TopBar: {
              toggleMenuLabel: "Toggle menu",
            },
            Modal: {
              iFrameTitle: "body markup",
            },
            Frame: {
              skipToContent: "Skip to content",
              navigationLabel: "Navigation",
              Navigation: {
                closeMobileNavigationLabel: "Close navigation",
              },
            },
          },
        }}
      >
        <Frame
          logo={logo}
          topBar={topBarDoshboard}
          navigation={NavigationDoshboard}
          showMobileNavigation={mobileNavigationActive}
          onNavigationDismiss={toggleMobileNavigationActive}
        >
          <SpaceX />
        </Frame>
      </AppProvider>
    </div>
  );
};
