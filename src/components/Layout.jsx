import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Layout = ({ children, loggedIn, setLoggedIn }) => {
  const [error, setError] = useState(null);
  const history = useHistory();

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
        console.log(data);
        setLoggedIn(null);
        history.push("/");
      })
      .catch((error) => {
        setError({ msg: error });
      });
  };
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {loggedIn && (
            <li>
              <Link to="/cursos">Cursos</Link>
            </li>
          )}
          <li>
            <Link to="/login">Login</Link> | <Link to="/signup">Sign up</Link>
          </li>
          {loggedIn && (
            <li>
              <Link onClick={deleteSession}>Desconectarme</Link>
            </li>
          )}
        </ul>
      </nav>
      {children}
    </>
  );
};

export default Layout;
