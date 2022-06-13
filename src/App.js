import { Login } from "./Pages/Login/Login";
import { Home } from "./Pages/Home/Home";
import { Register } from "./Pages/Register/Register";
import { Doshboard } from "./Componet/Root/Doshboard";
import {
  BrowserRouter as Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { Navbar } from "./Componet/NavBar/NabBar";
import { AppProvider } from "@shopify/polaris";
import en from "@shopify/polaris/locales/en.json";
import "@shopify/polaris/build/esm/styles.css";
import "./App.css";
import { SpaceX } from "./Componet/SpaceX/SpaceX";
import { ApolloProvider } from "@apollo/client";
import { client } from "./Componet/SpaceX/client";

export const App = () => {
  return (
    <div className="container">
      <ApolloProvider client={client}>
        <AppProvider i18n={en}>
          <BrowserRouter>
            <Routes>
              <Navbar />
              <Route exact path="/" element={Home}>
                <Home />
              </Route>
              <Route exact path="/login" element={Login}>
                <Login />
              </Route>
              <Route exact path="/register" element={Register}>
                <Register />
              </Route>
              <Route exact path="/doshboard" element={Doshboard}>
                <Doshboard />
              </Route>
              <Route exact path="/spaceX" element={SpaceX}>
                <SpaceX />
              </Route>
            </Routes>
          </BrowserRouter>
        </AppProvider>
      </ApolloProvider>
    </div>
  );
};
