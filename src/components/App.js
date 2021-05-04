import logo from "../logo.svg";
import "../components/App.css";
import { useEffect, useState } from "react";
import CoursesList from "./CoursesList";

function App() {
  const [cursos, setCurso] = useState([]);

  function getArticles() {
    fetch("/api/v1/cursos/index")
      .then((response) => response.json())
      .then((data) => setCurso(data));
  }

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div className="App">
      <h1>Todos los cursos</h1>
      <CoursesList cursos={cursos} />
    </div>
  );
}

export default App;
