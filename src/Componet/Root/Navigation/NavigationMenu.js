import React, { useState, useCallback } from "react";
import { Navigation } from "@shopify/polaris";
import {
  HomeMajor,
  OrdersMajor,
  ConversationMinor,
  ArrowLeftMinor,
} from "@shopify/polaris-icons";
export const NavigationMenu = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [modalActive, setModalActive] = useState(false);

  const toggleIsLoading = useCallback(
    () => setIsLoading((isLoading) => !isLoading),
    []
  );
  const toggleModalActive = useCallback(
    () => setModalActive((modalActive) => !modalActive),
    [],
  );

  return (
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
        title="Jaded Pixel App"
        items={[
          {
            label: "Dashboard",
            icon: HomeMajor,
            onClick: toggleIsLoading,
          },
          {
            label: "Jaded Pixel Orders",
            icon: OrdersMajor,
            onClick: toggleIsLoading,
          },
        ]}
        action={{
          icon: ConversationMinor,
          accessibilityLabel: "Contact support",
          onClick: toggleModalActive,
        }}
      />
    </Navigation>
  );
};
