import React from "react";
import { SideNavContainer } from "./styles";

const SideNav = ({ deleteSession }) => {
  return (
    <SideNavContainer>
      <h1>Hola</h1>
      <button onClick={deleteSession} type="submit" className="btn btn-danger">
        Cerrar sesión
      </button>
    </SideNavContainer>
  );
};

export default SideNav;
