import React from "react";
import ronaldo from "../../img/players/ronaldo.png";
import overlay6 from "../../img/backgrounds/overlay6.jpg";
import VanillaTilt from "vanilla-tilt";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  DashboardContainer,
  Ronaldo,
  Ronaldo2,
  Wrapper,
  Card1,
  Card1H2,
  Card2,
  Card3,
  MainSection,
  SideSection,
  SideSectionFirstCard,
  SideSectionSecondCard,
  Texture,
  TextureContainer,
} from "./styles";

const Dashboard = ({
  setError,
  user,
  setUser,
  setLoggedIn,
  loggedIn,
  history,
}) => {
  useEffect(() => {
    fetch("http://localhost:3000/current_user", {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else if (response.status === "401") {
          throw new Error("Unauthorized Request. Must be signed in.");
        }
      })
      .then((data) => {
        if (data && loggedIn === "NOT_LOGGED") {
          setLoggedIn("LOGGED_IN");
          setUser(data);
        } else if (!data && loggedIn === "LOGGED_IN") {
          setLoggedIn("NOT_LOGGED");
        } else if (loggedIn === "NOT_LOGGED") {
          history.push("/");
        }
      })
      .catch((err) => {
        setError(err);
      });
  }, [setError, setLoggedIn, setUser, loggedIn, history]);

  useEffect(() => {
    if (window.innerWidth > 960) {
      VanillaTilt.init(document.getElementById("Card1"), {
        max: 8,
        speed: 400,
        transition: true,
        glare: true,
      });
      VanillaTilt.init(document.getElementById("Card2"), {
        max: 8,
        speed: 400,
        transition: true,
        glare: true,
      });
    }
  }, []);

  return (
    <DashboardContainer>
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
      <div className="container-fluid">
        <h3>Bienvenido al dashboard, {user.name}</h3>
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
          <SideSection className="container">
            <h2>Bienvenido al dashboard</h2>
            <p>Hola</p>
            <SideSectionFirstCard>1</SideSectionFirstCard>
            <SideSectionSecondCard>1</SideSectionSecondCard>
          </SideSection>
        </MainSection>
      </div>
    </DashboardContainer>
  );
};

export default Dashboard;
