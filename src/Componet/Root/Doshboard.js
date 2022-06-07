import React,{ useState, useCallback} from "react";
import { AppProvider, Frame } from "@shopify/polaris";
import { logo } from "./logo";
import { TopBar } from "./TopBar/TopBar";
import { NavigationMenu } from "./Navigation/NavigationMenu";

export const Doshboard = () => {
  const [mobileNavigationActive, setMobileNavigationActive] = useState(false);



  return (
    <div>
      <AppProvider
        i18n={{
          Polaris: {
            Avatar: {
              label: "Avatar",
              labelWithInitials: "Avatar with initials {initials}",
            },
            ContextualSaveBar: {
              save: "Save",
              discard: "Discard",
            },
            TextField: {
              characterCount: "{count} characters",
            },
            TopBar: {
              toggleMenuLabel: "Toggle menu",

              SearchField: {
                clearButtonLabel: "Clear",
                search: "Search",
              },
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
          topBar={<TopBar  setMobileNavigationActive={setMobileNavigationActive}/>}
          navigation={<NavigationMenu />}
          showMobileNavigation={mobileNavigationActive}
          onNavigationToggle={toggleMobileNavigationActive}
        ></Frame>
      </AppProvider>
    </div>
  );
};
