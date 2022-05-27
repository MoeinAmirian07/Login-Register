import "./App.css";
import Login from "./Pages/Login/Login";
import Home from "./Pages/HOme/Home";
import Register from "./Pages/Register/Register";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./Componet/NavBar/NabBar";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" componet={Home}>
            <Home />
          </Route>
          <Route path="/login" componet={Login}>
            <Login />
          </Route>
          <Route path="/register" componet={Register}>
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
