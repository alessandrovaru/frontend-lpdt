import React from "react";
import { NewCourseCard } from "./styles";

const NewProfeForm = ({ fillForm, createProfe }) => {
  return (
    <NewCourseCard className="container">
      <form onSubmit={createProfe}>
        <h2>Crear un nuevo profe</h2>
        <p>Breve descripción para Gabo</p>
        <div className="mb-3 col">
          <label htmlFor="name" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            onChange={fillForm}
          />
        </div>
        <div className="mb-3 col">
          <label htmlFor="last_name" className="form-label">
            Apellido
          </label>
          <input
            type="text"
            className="form-control"
            id="last_name"
            name="last_name"
            onChange={fillForm}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </NewCourseCard>
  );
};

export default NewProfeForm;
