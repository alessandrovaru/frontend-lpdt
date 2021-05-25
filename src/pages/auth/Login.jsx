import React, { useState } from "react";

import { Link, useHistory } from "react-router-dom";
import {
  Section,
  LoginContainer,
  LoginTiltContainer,
  LoginForm,
} from "./styles";

import VanillaTilt from "vanilla-tilt";
import { useEffect } from "react";

const Login = ({ setLoggedIn, setCounter }) => {
  const [form, setForm] = useState(null);
  const [error, setError] = useState(null);

  const history = useHistory();

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
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

  useEffect(() => {
    if (window.innerWidth > 960) {
      VanillaTilt.init(document.getElementById("LoginContainer"), {
        max: 25,
        speed: 400,
      });
    }
  }, []);
  return (
    <>
      <Section>
        <LoginContainer id="LoginContainer">
          <LoginForm>
            <h2>Este es el login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  name="email"
                  onChange={handleInputChange}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
            <p>
              ¿No tienes cuenta? <Link to="/signup">Regístrate</Link>
            </p>
            {error && <p>{error.msg}</p>}
            <Link to="/">Home</Link>
          </LoginForm>
        </LoginContainer>
      </Section>
    </>
  );
};

export default Login;
