import "../components/App.css";
import { useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";

import Home from "../components/Home";
import Signup from "../components/auth/Signup";
import Login from "../components/auth/Login";
import Courses from "../components/courses/Courses";
import Layout from "../components/Layout";
import NotFound from "../components/NotFound";
import Dashboard from "./dashboard/Dashboard";

const App = () => {
  const token = localStorage.getItem("token");

  const [loggedIn, setLoggedIn] = useState(null);
  const [error, setError] = useState(null);

  // DELETE SESSION
  const deleteSession = (event) => {
    event.preventDefault();
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };
    fetch("http://localhost:3000/logout", requestOptions)
      .then((response) => {
        if (response.ok) {
          console.log("Logged out");
          return response.json();
        } else {
          return response.text().then((text) => Promise.reject(text));
        }
      })
      .then((data) => {
        console.log(data);
        localStorage.removeItem("token");
        setLoggedIn(null);
      })
      .catch((err) => {
        setError({ msg: err });
        console.log(error);
      });
  };
  useEffect(() => {
    if (token) {
      setLoggedIn(true);
    }
  }, []);
  return (
    <Router>
      <Layout deleteSession={deleteSession} loggedIn={loggedIn}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {loggedIn && (
            <>
              <Route exact path="/cursos">
                <Courses />
              </Route>
              <Route exact path="/dashboard">
                <Dashboard />
              </Route>
            </>
          )}
          <Route exact path="/login">
            <Login setLoggedIn={setLoggedIn} />
          </Route>
          <Route exact path="/signup">
            <Signup setLoggedIn={setLoggedIn} />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
