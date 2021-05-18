import React, { useState } from "react";

import { Link, useHistory } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

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
      <h2>Este es el login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="email" onChange={handleInputChange} />
        </label>
        <label>
          Contraseña:
          <input type="password" name="password" onChange={handleInputChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <p>
        ¿No tienes cuenta? <Link to="/signup">Regístrate</Link>
      </p>
      {error && <p>{error.msg}</p>}
      <Link to="/">Home</Link>
    </>
  );
};

export default Login;
