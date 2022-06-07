import { TopBar } from "@shopify/polaris";
export const userMenu = (
  <TopBar.UserMenu
    actions={userMenuActions}
    name="Dharma"
    detail={storeName}
    initials="D"
    open={userMenuActive}
    onToggle={toggleUserMenuActive}
  />
);
