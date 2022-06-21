import React, { useState, useCallback } from "react";
import { TopBar } from "@shopify/polaris";
import { useHistory } from "react-router-dom";

export const UserMenuSpaceXLogout = () => {
  const history = useHistory();
  const [userMenuActive, setUserMenuActive] = useState(false);
  const toggleUserMenuActive = useCallback(
    () => setUserMenuActive((userMenuActive) => !userMenuActive),
    []
  );

  const logoutHandler = useCallback(() => {
    localStorage.clear();
    history.push("/");
  }, [history]);
  return (
    <TopBar.UserMenu
      actions={[{ items: [{ content: "Logout", onAction: logoutHandler }] }]}
      name="SpaceX"
      initials="SX"
      open={userMenuActive}
      onToggle={toggleUserMenuActive}
    />
  );
};
