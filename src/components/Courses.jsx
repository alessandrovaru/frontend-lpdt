import React from "react";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import CoursesList from "./CoursesList";

const Courses = () => {
  const [cursos, setCurso] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  function getArticles() {
    setLoading(true);
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: localStorage.getItem("token"),
      },
    };
    fetch("/api/v1/cursos/index", requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        console.log(data);
        setCurso(data);
      })
      .catch(function (error) {
        setError({ msg: error });
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    getArticles();
  }, []);
  return (
    <div>
      <h1>Todos los cursos</h1>
      <CoursesList cursos={cursos} />
      <Link to="/">Home</Link>
      {error && (
        <p>
          No estás conectado a tu cuenta. <Link to="/login">Inicia sesion</Link>
        </p>
      )}
    </div>
  );
};

export default Courses;
