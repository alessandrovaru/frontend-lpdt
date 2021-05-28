import { Link } from "react-router-dom";
import { Section, LoginContainer, LoginForm } from "./styles";

import VanillaTilt from "vanilla-tilt";
import { useEffect } from "react";

const Login = ({ login, fillForm, error }) => {
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
            <form onSubmit={login}>
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
                  onChange={fillForm}
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
                  onChange={fillForm}
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
