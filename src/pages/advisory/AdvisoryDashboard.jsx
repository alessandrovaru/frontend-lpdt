import React from "react";
import { Link } from "react-router-dom";
import ronaldo from "../../img/players/ronaldo.png";
import overlay6 from "../../img/backgrounds/overlay6.jpg";

import { AdvisoryDashboardContainer } from "./styles";
import {
  MainSection,
  Wrapper,
  Texture,
  TextureContainer,
  Card2,
  Ronaldo,
  Card1,
  Card1H2,
} from "../dashboard/styles";
const AdvisoryDashboard = () => {
  return (
    <AdvisoryDashboardContainer>
      <nav className="navbar navbar-expand-lg  bg-transparent navbar-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Cursos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Capacitaciones
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/asesorias">
                  Asesorías
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <h3>Asesorías</h3>
      <MainSection>
        <Wrapper className="wrapper">
          <Card1 id="Card1">
            <TextureContainer>
              <Texture alt="Fondo" src={overlay6}></Texture>
            </TextureContainer>
            <Card1H2>NUEVO CURSO</Card1H2>
            <Ronaldo
              id="ronaldo"
              src={ronaldo}
              alt="La Pizarra del DT"
              className=" img-fluid"
            />
          </Card1>
          <Card2 id="Card2">
            <TextureContainer>
              <Texture alt="Fondo" src={overlay6}></Texture>
            </TextureContainer>
            <Card1H2>NUEVO CURSO</Card1H2>
            <Ronaldo
              id="ronaldo"
              src={ronaldo}
              alt="La Pizarra del DT"
              className=" img-fluid"
            />
          </Card2>
        </Wrapper>
      </MainSection>
    </AdvisoryDashboardContainer>
  );
};

export default AdvisoryDashboard;
