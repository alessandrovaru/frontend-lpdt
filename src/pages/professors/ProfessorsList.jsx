import React from "react";
// import { Link } from 'react-router-dom'
import { CourseCard } from "../courses/styles";

const ProfessorsList = ({
  profes,
  updateProfe,
  deleteProfe,
  editProfe,
  editable,
  fillForm,
}) => {
  return (
    <>
      {profes.map((c) => (
        <CourseCard
          className="text-decoration-none text-muted"
          key={c.id}
          id={c.id}
        >
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
              id="last_name"
              name="last_name"
              defaultValue={c.description}
              onChange={fillForm}
            />
          ) : (
            <h4>{c.last_name}</h4>
          )}
          <button
            onClick={(e) => deleteProfe(c.id, e)}
            className="btn btn-danger"
          >
            Borrar
          </button>
          <button
            type="submit"
            onClick={!editable ? editProfe : (e) => updateProfe(c.id, e)}
            className="btn btn-warning"
          >
            {editable ? "Submit" : "Edit"}
          </button>
        </CourseCard>
      ))}
    </>
  );
};

export default ProfessorsList;
