import React, { useEffect, useState } from "react";
import { CourseSection } from "./styles";
const Professors = () => {
  const [cursos, setProfe] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  // GET PROFES
  function getProfes() {
    setLoading(true);
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: localStorage.getItem("token"),
      },
    };
    fetch("/api/v1/teachers/index", requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        console.log(data);
      })
      .catch(function (error) {
        setError({ msg: error });
      })
      .finally(() => {
        setLoading(false);
      });
  }
  useEffect(() => {
    getProfes();
  }, []);
  return (
    <CourseSection>
      <h2>Hola</h2>
    </CourseSection>
  );
};

export default Professors;
