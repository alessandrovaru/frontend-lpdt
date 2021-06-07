import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CourseSection } from "./styles";

const ShowCourse = ({ history }) => {
  const [cursos, setCurso] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  // POST COURSES (DELETE)
  const deleteCourse = (id, e) => {
    e.preventDefault();

    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    };
    fetch(`/api/v1/destroy/${id}`, requestOptions)
      .then((response) => {
        if (response.ok) {
          console.log(response);
          return response.json();
        } else {
          return response.text().then((text) => Promise.reject(text));
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        setError({ msg: error });
        console.log(error);
      })
      .finally(() => {
        history.push("/cursos");
      });
  };
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
      <button onClick={(e) => deleteCourse(cursos.id, e)}>borrar</button>
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
