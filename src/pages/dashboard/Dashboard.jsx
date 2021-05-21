import React from "react";
import { Button } from "react-bootstrap";
import ronaldo from "../../img/players/ronaldo.png";
import VanillaTilt from "vanilla-tilt";

import {
  DashboardContainer,
  Card1,
  Card2,
  Card3,
  Card4,
  Card5,
  Card1Content,
  Card2Content,
  Card3Content,
  Card4Content,
  Card5Content,
} from "./styles";
import { useEffect } from "react";

const Dashboard = ({ deleteSession }) => {
  useEffect(() => {
    if (window.innerWidth > 960) {
      VanillaTilt.init(document.getElementById("Card1Content"), {
        max: 8,
        speed: 400,
        glare: true,
        scale: 1,
        transition: true,
      });
      VanillaTilt.init(document.getElementById("ronaldo"), {
        max: 10,
        speed: 400,
        scale: 1.1,
        transition: true,
      });
    }
  }, []);

  return (
    <DashboardContainer>
      <div className="container">
        <h2>Bienvenido al dashboard</h2>
        <p>Hola</p>

        <div className="container">
          <div className="row">
            <Card1 className="col-sm-8">
              <Card1Content id="Card1Content">
                <h2>Nuevo Curso</h2>
                <img
                  id="ronaldo"
                  src={ronaldo}
                  alt="La Pizarra del DT"
                  width="300"
                  className="d-inline-block align-text-top"
                />
              </Card1Content>
            </Card1>
            <Card2 className="col-sm-4">
              <Card2Content>Todos los cursos</Card2Content>
            </Card2>
          </div>
          <div className="row">
            <Card3 className="col-sm">
              <Card3Content>Mi suscripción</Card3Content>
            </Card3>
            <Card4 className="col-sm">
              <Card4Content>Todos los cursos</Card4Content>
            </Card4>
            <Card5 className="col-sm">
              <Card5Content>Ajustes</Card5Content>
            </Card5>
          </div>
        </div>
      </div>
    </DashboardContainer>
  );
};

export default Dashboard;
