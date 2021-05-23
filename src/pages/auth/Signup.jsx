import React, { useState } from "react";

import { Link, useHistory } from "react-router-dom";

import VanillaTilt from "vanilla-tilt";

import { Section, SignUpContainer, LoginForm } from "./styles";

const Signup = ({ setLoggedIn }) => {
  const [form, setForm] = useState(null);
  const [error, setError] = useState(null);

  if (window.innerWidth > 960) {
    VanillaTilt.init(document.getElementById("SignUpContainer"), {
      max: 25,
      speed: 400,
    });
  }

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

  return (
    <>
      <Section>
        <SignUpContainer id="SignUpContainer">
          <LoginForm>
            <h2>Es es el signup</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
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
                <label for="exampleInputPassword1" className="form-label">
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
                <label className="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
            {error && <p>{error.msg}</p>}
            <Link to="/">Home</Link>
          </LoginForm>
        </SignUpContainer>
      </Section>
    </>
  );
};

export default Signup;
