import React from "react";
import { NewCourseCard } from "./styles";

const NewCourseForm = ({ fillForm, createCourse }) => {
  return (
    <NewCourseCard className="container">
      <form onSubmit={createCourse}>
        <h2>Crear un nuevo curso</h2>
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
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            onChange={fillForm}
          />
        </div>
        <div className="mb-3 col">
          <label htmlFor="price" className="form-label">
            precio
          </label>
          <input
            type="text"
            className="form-control"
            id="price"
            name="price"
            onChange={fillForm}
          />
        </div>
        <div className="mb-3 col">
          <label htmlFor="price" className="form-label">
            profe id
          </label>
          <input
            type="text"
            className="form-control"
            id="professor_id"
            name="professor_id"
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

export default NewCourseForm;
