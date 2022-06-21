import { SpaceX } from "./SpaceX/SpaceX";
import React, { useState, useCallback, useEffect } from "react";
import { Frame, TopBar } from "@shopify/polaris";
import { useHistory } from "react-router-dom";
import { logo } from "./logo";
import { NavigationDoshboard } from "./NavigationDoshboard";
import { UserMenuSpaceXicon } from "./userMenuSpaceXicon";

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
      userMenu={<UserMenuSpaceXicon />}
      onNavigationToggle={toggleMobileNavigationActive}
    />
  );

  return (
    <div style={{ height: "500px" }}>
      <Frame
        logo={logo}
        topBar={topBarDoshboard}
        navigation={NavigationDoshboard}
        showMobileNavigation={mobileNavigationActive}
        onNavigationDismiss={toggleMobileNavigationActive}
      >
        <SpaceX />
      </Frame>
    </div>
  );
};
