import React from "react";
import { Button } from "react-bootstrap";
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

const Dashboard = ({ deleteSession }) => {
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
            <h2>Todos los cursos</h2>
            <Ronaldo2
              id="ronaldo"
              src={ronaldo}
              alt="La Pizarra del DT"
              className="img-fluid"
            />
          </Card2>

          <Card3 id="Card3">
            <h2>Tododddlos cursos</h2>
            <Ronaldo2
              id="ronaldo"
              src={ronaldo}
              alt="La Pizarra del DT"
              className="img-fluid"
            />
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
