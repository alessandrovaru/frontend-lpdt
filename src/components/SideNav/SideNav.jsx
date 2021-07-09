import React from "react";
import { SideNavContainer, UnorderedList, ListItems } from "./styles";
import isoLogoNegro from "../../img/logos/isonegro.png";
import { Link } from "react-router-dom";
const SideNav = ({ deleteSession }) => {
  return (
    <SideNavContainer>
      <img
        src={isoLogoNegro}
        alt="La Pizarra del DT"
        width="40"
        height="40"
        className="d-inline-block align-text-top"
      />
      <div>
        <UnorderedList>
          <Link to='/dashboard'><ListItems>Dashboard</ListItems></Link>
          <Link to='/profesores'><ListItems>Profesores</ListItems></Link>
          <Link to='/cursos'><ListItems>Cursos</ListItems></Link>
          <ListItems>Mi perfil</ListItems>
          <ListItems>Ayuda</ListItems>
          <ListItems>Configuración</ListItems>
        </UnorderedList>
      </div>

      <button onClick={deleteSession} type="submit" className="btn btn-danger">
        Cerrar sesión
      </button>
    </SideNavContainer>
  );
};

export default SideNav;
