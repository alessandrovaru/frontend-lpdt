import React from "react";
import { Button } from "react-bootstrap";

const Dashboard = ({ deleteSession }) => {
  return (
    <>
      <h2>Bienvenido al dashboard</h2>
      <p>Hola</p>
      <Button onClick={deleteSession} variant="outline-danger">
        Cerrar sesión
      </Button>
    </>
  );
};

export default Dashboard;
