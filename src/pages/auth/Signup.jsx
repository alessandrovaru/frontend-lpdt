import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import VanillaTilt from "vanilla-tilt";

import { Section, SignUpContainer, LoginForm } from "./styles";

const Signup = ({ signup, fillForm, error }) => {
  useEffect(() => {
    if (window.innerWidth > 960) {
      VanillaTilt.init(document.getElementById("SignUpContainer"), {
        max: 25,
        speed: 400,
      });
    }
  }, []);

  return (
    <>
      <Section>
        <SignUpContainer id="SignUpContainer">
          <LoginForm>
            <h2>Es es el signup</h2>
            <form onSubmit={signup}>
              <div className="row">
                <div className="mb-3 col">
                  <label htmlFor="name" className="form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    onChange={fillForm}
                  />
                </div>
                <div className="mb-3 col">
                  <label htmlFor="lastname" className="form-label">
                    Apellido
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastname"
                    name="lastname"
                    onChange={fillForm}
                  />
                </div>
              </div>

              <div className="mb-3 ">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  name="email"
                  onChange={fillForm}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  onChange={fillForm}
                />
              </div>
              <div className="row">
                <div className="mb-3 col">
                  <label htmlFor="country" className="form-label">
                    País
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="country"
                    name="country"
                    onChange={fillForm}
                  />
                </div>
                <div className="mb-3 col">
                  <label htmlFor="phone" className="form-label">
                    Número de teléfono
                  </label>
                  <input
                    type="integer"
                    className="form-control"
                    id="phone"
                    name="phone"
                    onChange={fillForm}
                  />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  onChange={fillForm}
                />
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
