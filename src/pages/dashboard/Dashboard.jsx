import React from "react";
import ronaldo from "../../img/players/ronaldo.png";
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
      VanillaTilt.init(document.getElementById("Card3"), {
        max: 8,
        speed: 400,
        transition: true,
        glare: true,
      });
    }
  }, []);

  return (
    <DashboardContainer>
      <MainSection className="container">
        <h2>Bienvenido al dashboard, {user.name}</h2>
        <p>Hola ¿Qué tal todo por {user.country}?</p>
        <Wrapper className="wrapper">
          <Card1 id="Card1">
            <Card1H2>NUEVO CURSO</Card1H2>
            <Ronaldo
              id="ronaldo"
              src={ronaldo}
              alt="La Pizarra del DT"
              className=" img-fluid"
            />
          </Card1>

          <Card2 id="Card2">
            <Link className="text-decoration-none text-reset" to="/cursos">
              <h2>Todos los cursos</h2>
              <Ronaldo2
                id="ronaldo"
                src={ronaldo}
                alt="La Pizarra del DT"
                className="img-fluid"
              />
            </Link>
          </Card2>

          <Card3 id="Card3">
            <Link
              className="text-decoration-none text-reset"
              to="/capacitaciones"
            >
              <h2>Capacitaciones</h2>
              <Ronaldo2
                id="ronaldo"
                src={ronaldo}
                alt="La Pizarra del DT"
                className="img-fluid"
              />
            </Link>
          </Card3>
        </Wrapper>
      </MainSection>
      <SideSection className="container">
        <h2>Bienvenido al dashboard</h2>
        <p>Hola</p>
        <SideSectionFirstCard>1</SideSectionFirstCard>
        <SideSectionSecondCard>1</SideSectionSecondCard>
      </SideSection>
    </DashboardContainer>
  );
};

export default Dashboard;
