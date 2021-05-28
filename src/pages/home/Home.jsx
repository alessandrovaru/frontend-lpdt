import React from "react";

import { Section, Botones } from "./styles";

import { Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const Home = ({ loggedIn }) => {
  const history = useHistory();
  if (loggedIn) {
    history.push("/dashboard");
  }
  return (
    <>
      <Section>
        {loggedIn ? (
          <h2>hola</h2>
        ) : (
          <>
            <h1>Este es el home</h1>
            <Botones>
              <Link to="/login">
                <Button variant="outline-primary">Iniciar sesión</Button>
              </Link>
              <Link to="/signup">
                <Button variant="outline-success">Registrarme</Button>
              </Link>
            </Botones>
          </>
        )}
      </Section>
    </>
  );
};

export default Home;
