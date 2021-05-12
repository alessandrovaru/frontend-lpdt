import React from "react";
import { Link } from "react-router-dom";

const Header = ({ loggedIn, deleteSession }) => {
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
          {!loggedIn && (
            <li>
              <Link to="/login">Login</Link> | <Link to="/signup">Sign up</Link>
            </li>
          )}

          {loggedIn && (
            <li>
              <Link to="/" onClick={deleteSession}>
                Desconectarme
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Header;
