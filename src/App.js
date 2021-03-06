import { Login } from "./Pages/Login/Login";
import { Home } from "./Pages/Home/Home";
import { Register } from "./Pages/Register/Register";
import { Doshboard } from "./Componet/Doshboard/Doshboard";
import {
  BrowserRouter as Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { AppProvider } from "@shopify/polaris";
import en from "@shopify/polaris/locales/en.json";
import "@shopify/polaris/build/esm/styles.css";
import "./App.css";
import { ApolloProvider } from "@apollo/client";
import { client } from "./GraphQl/client";
export const App = () => {
  return (
    <div className="container">
      <ApolloProvider client={client}>
        <AppProvider
          i18n={{
            en,
            Polaris: {
              TopBar: {
                toggleMenuLabel: "Toggle menu",
              },
              Modal: {
                iFrameTitle: "body markup",
              },
              Frame: {
                navigationLabel: "Navigation",
                Navigation: {
                  closeMobileNavigationLabel: "Close navigation",
                },
              },
            },
          }}
        >
          <BrowserRouter>
            <Routes>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/doshboard" component={Doshboard} />
            </Routes>
          </BrowserRouter>
        </AppProvider>
      </ApolloProvider>
    </div>
  );
};
