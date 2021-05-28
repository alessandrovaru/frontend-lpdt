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
          setCounter(60);
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
    if (localStorage.getItem("token")) {
      setLoggedIn(true);
    }
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    counter === 6000 && alert("llevas 1 hora y 40 minutos en la page");
    console.log(counter);

    return () => clearInterval(timer);
  }, [counter]);

  return (
    <Router history={history}>
      <Switch>
        <Layout loggedIn={loggedIn} deleteSession={deleteSession}>
          <Route exact path="/">
            <Home />
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
            <Dashboard loggedIn={loggedIn} deleteSession={deleteSession} />
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
