import React, { useCallback } from "react";
import { userMenu } from "./userMenu";

export const TopBar = ({setMobileNavigationActive}) => {
  const toggleMobileNavigationActive = useCallback(
    () =>
      setMobileNavigationActive(
        (mobileNavigationActive) => !mobileNavigationActive
      ),
    []
  );
  return (
    <TopBar
      showNavigationToggle
      userMenu={userMenu}
      onNavigationToggle={toggleMobileNavigationActive}
    />
  );
};
