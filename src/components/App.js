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
import NewCourse from "../pages/courses/NewCourse";
import ShowCourse from "../pages/courses/ShowCourse";
import Professors from "../pages/professors/professors";

const App = ({ history }) => {
  const [loggedIn, setLoggedIn] = useState("NOT_LOGGED");
  const [form, setForm] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [user, setUser] = useState({});

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
    fetch("http://localhost:3000/login", requestOptions)
      .then((response) => {
        if (response.ok) {
          localStorage.setItem("token", response.headers.get("Authorization"));
          localStorage.setItem("lastLoginTime", new Date(Date.now()).getTime());
          return response.json();
        } else {
          return response.text().then((text) => Promise.reject(text));
        }
      })
      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data.data));
        setUser(data.data);
        setLoggedIn("LOGGED_IN");
        setForm([]);

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
          localStorage.setItem("lastLoginTime", new Date(Date.now()).getTime());
          return response.json();
        } else {
          return response.text().then((text) => Promise.reject(text));
        }
      })
      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data.data));
        setUser(data.data);
        setLoggedIn("LOGGED_IN");
        setForm([]);
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
          return response.text().then((text) => Promise.reject(text));
        }
      })
      .then((data) => {
        history.push("/");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser([]);
        setLoggedIn(null);
      })
      .catch((err) => {
        setError(JSON.parse(err));
        if (error.message === `Couldn't find an active session.` || null) {
          history.push("/");
          localStorage.removeItem("token");
          setLoggedIn(null);
        }
      });
  };

  useEffect(() => {
    fetch("http://localhost:3000/current_user", {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else if (response.status === "401") {
          throw new Error("Unauthorized Request. Must be signed in.");
        }
      })
      .then((data) => {
        if (data && loggedIn === "NOT_LOGGED") {
          setLoggedIn("LOGGED_IN");
          setUser(data);
        } else if (!data && loggedIn === "LOGGED_IN") {
          setLoggedIn("NOT_LOGGED");
        } else if (loggedIn === "NOT_LOGGED") {
          history.push("/");
        }
      })
      .catch((err) => {
        setError(err);
      });
  }, [loggedIn, history]);

  return (
    <Router history={history}>
      <Switch>
        <Layout loggedIn={loggedIn} deleteSession={deleteSession}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login
              login={handleLogin}
              fillForm={fillForm}
              error={error}
              loading={loading}
            />
          </Route>
          <Route exact path="/signup">
            <Signup
              signup={signup}
              error={error}
              fillForm={fillForm}
              loading={loading}
            />
          </Route>
          <Route exact path="/cursos">
            <Courses setForm={setForm} form={form} fillForm={fillForm} />
          </Route>
          <Route exact path="/cursos/:id">
            <ShowCourse history={history} />
          </Route>
          <Route exact path="/cursos/new">
            <NewCourse fillForm={fillForm} />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard
              user={user}
              setUser={setUser}
              setLoggedIn={setLoggedIn}
              loggedIn={loggedIn}
              history={history}
              setError={setError}
              setLoading={setLoading}
            />
          </Route>
          <Route exact path="/profesores">
            <Professors setForm={setForm} form={form} fillForm={fillForm} />
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
