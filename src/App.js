import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import Navbar from "./Componet/NavBar/NabBar";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { AppProvider } from "@shopify/polaris";
import en from "@shopify/polaris/locales/en.json";
import "@shopify/polaris/build/esm/styles.css";

const App = () => {
  return (
    <AppProvider i18n={en}>
      <BrowserRouter>
        <Routes>
          <Navbar />
          <Route exact path="/" component={Home}>
            <Home />
          </Route>
          <Route exact path="/login" componet={Login}>
            <Login />
          </Route>
          <Route exact path="/register" componet={Register}>
            <Register />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
