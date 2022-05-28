import "./App.css";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
import { BrowserRouter as Routes, Switch, Route, Link } from "react-router-dom";
import Navbar from "./Componet/NavBar/NabBar";
import "./App.css";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

const App = () => {
  return (
    <div className="container">
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
    </div>
  );
};

export default App;
