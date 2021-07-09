import React, { useEffect } from "react";

import { CourseCard, CardContainer } from "./styles";
import VanillaTilt from "vanilla-tilt";

const CoursesList = ({
  cursos,
  deleteCourse,
  editCourse,
  editable,
  updateCourse,
  fillForm,
}) => {
  // EFECTO DE CARTAS
  const ciclo = cursos.map((c) => {
    return VanillaTilt.init(document.getElementById(c.id), {
      max: 8,
      speed: 400,
      transition: true,
      glare: true,
    });
  });
  //EDIT
  // PRIMER EFECTO PARA LAS CARTAS
  useEffect(() => {
    if (window.innerWidth > 960) {
      return ciclo;
    }
  }, [ciclo]);

  return (
    <CardContainer>
      {cursos.map((c) => (
        <div key={c.id} className="text-decoration-none text-muted">
          <CourseCard key={c.id} id={c.id}>
            {editable ? (
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                defaultValue={c.name}
                onChange={fillForm}
              />
            ) : (
              <h3>{c.name}</h3>
            )}
            {editable ? (
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                defaultValue={c.description}
                onChange={fillForm}
              />
            ) : (
              <h4>{c.description}</h4>
            )}
            <button
              onClick={(e) => deleteCourse(c.id, e)}
              className="btn btn-danger"
            >
              Borrar
            </button>
            <button
              type="submit"
              onClick={!editable ? editCourse : (e) => updateCourse(c.id, e)}
              className="btn btn-warning"
            >
              {editable ? "Submit" : "Edit"}
            </button>
          </CourseCard>
        </div>
      ))}
    </CardContainer>
  );
};

export default CoursesList;
