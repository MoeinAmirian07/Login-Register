import "./App.css";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
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
          <Route exact path="/" componet={<Home />} />
          <Route path="/login" componet={<Login />}></Route>
          <Route path="/register" componet={<Register />}></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
