import "./App.css";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
          <li>
            <Link to={"/register"}>Register</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/" componet={Home} />
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
