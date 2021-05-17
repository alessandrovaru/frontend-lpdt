import "../components/App.css";
import { useEffect, useState } from "react";

import { Router, Route, Switch } from "react-router-dom";

import Home from "../pages/home/Home";
import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/Login";
import Courses from "../pages/courses/Courses";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/dashboard/Dashboard";
import Layout from "./Layout/Layout";

const App = ({ history }) => {
  const [loggedIn, setLoggedIn] = useState(null);
  const [error, setError] = useState(null);

  // DELETE SESSION
  const deleteSession = (event) => {
    event.preventDefault();
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    };
    fetch("http://localhost:3000/logout", requestOptions)
      .then((response) => {
        if (response.ok) {
          console.log("Logged out");
          return response.json();
        } else {
          console.log("estoy aqui");
          return response.text().then((text) => Promise.reject(text));
        }
      })
      .then((data) => {
        console.log("estoy aqui2");
        console.log(data);

        history.push("/");
        localStorage.removeItem("token");
        setLoggedIn(null);
      })
      .catch((err) => {
        console.log("estoy aqui3");
        setError({ msg: err });
        console.log(error);
      });
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLoggedIn(true);
    }
  }, []);
  return (
    <Router history={history}>
      <Switch>
        <Layout>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login setLoggedIn={setLoggedIn} />
          </Route>
          <Route exact path="/signup">
            <Signup setLoggedIn={setLoggedIn} />
          </Route>
        </Layout>
        <Route exact path="/cursos">
          <Courses />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard deleteSession={deleteSession} />
        </Route>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
