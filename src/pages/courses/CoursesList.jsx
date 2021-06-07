import React, { useEffect } from "react";

import { CourseCard, CardContainer } from "./styles";
import VanillaTilt from "vanilla-tilt";
import { Link } from "react-router-dom";

const CoursesList = ({ cursos, deleteCourse }) => {
  // EFECTO DE CARTAS
  const ciclo = cursos.map((c) => {
    return VanillaTilt.init(document.getElementById(c.id), {
      max: 8,
      speed: 400,
      transition: true,
      glare: true,
    });
  });
  // PRIMER EFECTO PARA LAS CARTAS
  useEffect(() => {
    if (window.innerWidth > 960) {
      return ciclo;
    }
  }, [ciclo]);

  return (
    <CardContainer>
      {cursos.map((c) => (
        <Link className="text-decoration-none text-muted" to={`cursos/${c.id}`}>
          <CourseCard key={c.id} id={c.id}>
            <h2>{c.name}</h2>
            <h3>Description</h3>
            <p>{c.description}</p>
            <h4>Precio</h4>
            <p>{c.description}</p>
            <button
              onClick={(e) => deleteCourse(c.id, e)}
              className="btn btn-danger"
            >
              Borrar
            </button>
          </CourseCard>
        </Link>
      ))}
    </CardContainer>
  );
};

export default CoursesList;
