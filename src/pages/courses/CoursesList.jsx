import React, { useEffect } from "react";

import { CourseCard, CardContainer } from "./styles";
import VanillaTilt from "vanilla-tilt";

const CoursesList = ({ cursos }) => {
  const ciclo = cursos.map((c) => {
    return VanillaTilt.init(document.getElementById(c.id), {
      max: 8,
      speed: 400,
      transition: true,
      glare: true,
    });
  });
  useEffect(() => {
    if (window.innerWidth > 960) {
      return ciclo;
    }
  }, [ciclo]);
  return (
    <CardContainer>
      {cursos.map((c) => (
        <CourseCard key={c.id} id={c.id}>
          <h2>{c.name}</h2>
          <p>
            Lorem ipsum es el texto que se usa habitualmente en diseño gráfico
            en demostraciones de tipografías o de borradores de diseño para
            probar el diseño visual antes de insertar el texto final.
          </p>
        </CourseCard>
      ))}
    </CardContainer>
  );
};

export default CoursesList;
