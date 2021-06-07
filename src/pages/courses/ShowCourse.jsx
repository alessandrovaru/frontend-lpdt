import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CourseSection } from "./styles";

const ShowCourse = () => {
  const [cursos, setCurso] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const path = window.location.pathname;
    const cursoID = path.slice(8);
    setLoading(true);
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: localStorage.getItem("token"),
      },
    };
    fetch(`/api/v1/show/${cursoID}`, requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setCurso(data);
      })
      .catch(function (error) {
        setError({ msg: error });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <CourseSection>
      <h2>{cursos.id}</h2>
      <h3>{cursos.name}</h3>
      <p>{cursos.description}</p>
      <Link to="/dashboard">
        <button className="btn btn-primary">Dashboard</button>
      </Link>
      {error && (
        <p>
          No estás conectado a tu cuenta. <Link to="/login">Inicia sesion</Link>
        </p>
      )}
      {loading && <p>Cargando</p>}
    </CourseSection>
  );
};

export default ShowCourse;
