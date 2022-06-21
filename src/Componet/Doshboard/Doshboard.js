import { SpaceX } from "./SpaceX/SpaceX";
import React, { useState, useCallback, useEffect } from "react";
import { Frame, TopBar } from "@shopify/polaris";
import { useHistory } from "react-router-dom";
import { logo } from "./logo";
import { NavigationDoshboard } from "./NavigationDoshboard";
import { UserMenuSpaceXLogout } from "./UserMenuSpaceXLogout";

export const Doshboard = () => {
  const history = useHistory();
  const [mobileNavigationActive, setMobileNavigationActive] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      history.push("/");
    }
  });

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
      userMenu={<UserMenuSpaceXLogout />}
      onNavigationToggle={toggleMobileNavigationActive}
    />
  );

  return (
    <Frame
      logo={logo}
      topBar={topBarDoshboard}
      navigation={<NavigationDoshboard />}
      showMobileNavigation={mobileNavigationActive}
      onNavigationDismiss={toggleMobileNavigationActive}
    >
      <SpaceX />
    </Frame>
  );
};
