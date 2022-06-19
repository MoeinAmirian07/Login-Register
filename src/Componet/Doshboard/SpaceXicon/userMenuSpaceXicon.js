import { userMenuActions } from "./userMenuAction";
import React, { useState, useCallback } from "react";
import { TopBar } from "@shopify/polaris";

export const UserMenuSpaceXicon = () => {
  const [userMenuActive, setUserMenuActive] = useState(false);
  const toggleUserMenuActive = useCallback(
    () => setUserMenuActive((userMenuActive) => !userMenuActive),
    []
  );
  return (
    <TopBar.UserMenu
      actions={userMenuActions}
      name="SpaceX"
      initials="SX"
      open={userMenuActive}
      onToggle={toggleUserMenuActive}
    />
  );
};
