import logo from "../logo.svg";
import "../components/App.css";
import { useEffect, useState } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../components/Home";
import Signup from "../components/Signup";
import Login from "../components/Login";
import Courses from "../components/Courses";
import Layout from "../components/Layout";
import NotFound from "../components/NotFound";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(null);
  return (
    <Router>
      <Layout loggedIn={loggedIn} setLoggedIn={setLoggedIn}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/cursos">
            {loggedIn && <Courses />}
          </Route>
          <Route exact path="/login">
            <Login setLoggedIn={setLoggedIn} />
          </Route>
          <Route exact path="/signup">
            <Signup setLoggedIn={setLoggedIn} />
          </Route>
          <Route exact path="/notfound">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
