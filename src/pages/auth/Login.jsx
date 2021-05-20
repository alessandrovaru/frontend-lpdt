import React, { useState } from "react";

import { Link, useHistory } from "react-router-dom";
import { Section, LoginContainer } from "./styles";

const Login = ({ setLoggedIn }) => {
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

  return (
    <>
      <Section>
        <LoginContainer>
          <h2>Este es el login</h2>
          <form onSubmit={handleSubmit}>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="email"
                aria-describedby="emailHelp"
                name="email"
                onChange={handleInputChange}
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="password"
                name="password"
                onChange={handleInputChange}
              />
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
          <p>
            ¿No tienes cuenta? <Link to="/signup">Regístrate</Link>
          </p>
          {error && <p>{error.msg}</p>}
          <Link to="/">Home</Link>
        </LoginContainer>
      </Section>
    </>
  );
};

export default Login;
