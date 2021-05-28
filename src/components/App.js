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
  const [form, setForm] = useState(null);
  const [error, setError] = useState(null);
  const [counter, setCounter] = useState(60 * 120);

  function checkSession() {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: localStorage.getItem("token"),
      },
    };
    fetch("http://localhost:3000/current_user", requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.text().then((text) => Promise.reject(text));
        }
      })
      .then((data) => {
        console.log(data);
        setLoggedIn(true);
      })
      .catch(function (error) {
        const objError = JSON.parse(error);
        setError(objError.error);
        localStorage.removeItem("token");
        setLoggedIn(null);
      })
      .finally(() => {});
  }

  // FILL FORM
  const fillForm = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // LOGIN
  const handleLogin = (event) => {
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: form,
      }),
    };
    console.log(form);
    fetch("http://localhost:3000/login", requestOptions)
      .then((response) => {
        if (response.ok) {
          setLoggedIn(true);
          localStorage.setItem("token", response.headers.get("Authorization"));
          return response.json();
        } else {
          return response.text().then((text) => Promise.reject(text));
        }
      })
      .then((data) => {
        console.log(data);
        history.push("/dashboard");
      })
      .catch((error) => {
        setError({ msg: error });
      });
  };

  // SIGN UP
  const signup = (event) => {
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: form,
      }),
    };
    console.log(form);
    fetch("http://localhost:3000/signup", requestOptions)
      .then((response) => {
        if (response.ok) {
          setLoggedIn(true);
          localStorage.setItem("token", response.headers.get("Authorization"));
          return response.json();
        } else {
          return response.text().then((text) => Promise.reject(text));
        }
      })
      .then((data) => {
        console.log(data);
        history.push("/dashboard");
      })
      .catch((error) => {
        setError({ msg: error });
      });
  };

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
        setError(JSON.parse(err));
        if (error.message === `Couldn't find an active session.` || null) {
          history.push("/");
          localStorage.removeItem("token");
          setLoggedIn(null);
        }

        console.log("estoy aqusi3");
      });
  };

  useEffect(() => {
    checkSession();
  });

  return (
    <Router history={history}>
      <Switch>
        <Layout loggedIn={loggedIn} deleteSession={deleteSession}>
          <Route exact path="/">
            <Home loggedIn={loggedIn} />
          </Route>
          <Route exact path="/login">
            <Login login={handleLogin} fillForm={fillForm} error={error} />
          </Route>
          <Route exact path="/signup">
            <Signup signup={signup} error={error} fillForm={fillForm} />
          </Route>
          <Route exact path="/cursos">
            <Courses />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard deleteSession={deleteSession} />
          </Route>
        </Layout>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
