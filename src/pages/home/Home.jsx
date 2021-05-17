import React from "react";

import { Section, Botones } from "./styles";

import Header from "../../components/Header";
import Footer from "../../components/Footer/Footer";
import BackgroundVideo from "../../components/BackgroundVideo/BackgroundVideo";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

const Home = () => {
  return (
    <>
      <Section>
        <h1>Este es el home</h1>
        <Botones>
          <Link to="/login">
            <Button variant="outline-primary">Iniciar sesión</Button>
          </Link>
          <Link to="/signup">
            <Button variant="outline-success">Registrarme</Button>
          </Link>
        </Botones>
      </Section>
    </>
  );
};

export default Home;
