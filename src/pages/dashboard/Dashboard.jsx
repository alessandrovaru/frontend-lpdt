import React from "react";
import ronaldo from "../../img/players/ronaldo.png";
import VanillaTilt from "vanilla-tilt";

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
import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

const Dashboard = ({ loggedIn }) => {
  const history = useHistory();
  if (!loggedIn) {
    history.push("/");
  }
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
        <h2>Bienvenido al dashboard</h2>
        <p>Hola</p>
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
              <h2>Capactaciones</h2>
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
