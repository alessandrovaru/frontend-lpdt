import React from "react";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import CoursesList from "./CoursesList";
//COMPONENTES
import NewCourseForm from "../../components/Form/NewCourseForm";
// import ListOfCategory from "../../components/Category/ListOfCategory";

import { CourseSection } from "./styles";
import { Button } from "react-bootstrap";

const Courses = ({ fillForm, form, setForm }) => {
  const [cursos, setCurso] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const [newCourse, setNewCourse] = useState(null);

  // GET COURSES
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
  // POST COURSES (CREATE)
  const createCourse = (event) => {
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify(form),
    };
    fetch("/api/v1/cursos/create", requestOptions)
      .then((response) => {
        if (response.ok) {
          console.log(response);
          return response.json();
        } else {
          return response.text().then((text) => Promise.reject(text));
        }
      })
      .then((data) => {
        setForm([]);
        getArticles();
        console.log(data);
      })
      .catch((error) => {
        setError({ msg: error });
      });
  };
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
        getArticles();
      });
  };
  // CAMBIOS DE ESTADO PARA EL POST
  const mountForm = () => {
    setNewCourse(true);
  };
  const unMountForm = () => {
    setNewCourse(false);
  };
  // PRIMER EFECTO
  useEffect(() => {
    getArticles();
  }, []);

  return (
    <CourseSection>
      <h1>Todos los cursos</h1>
      {newCourse ? (
        <>
          <NewCourseForm createCourse={createCourse} fillForm={fillForm} />
          <Button onClick={unMountForm} className="btn btn-primary">
            ¡Estoy listo!
          </Button>
        </>
      ) : (
        <Button onClick={mountForm} className="btn btn-primary">
          New
        </Button>
      )}
      {/* <ListOfCategory /> */}
      <CoursesList cursos={cursos} deleteCourse={deleteCourse} />
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

export default Courses;
