import React, { useEffect, useState } from "react";
import { CourseSection } from "./styles";
import ProfessorsList from "./ProfessorsList";
import NewProfeForm from "../../components/Form/NewProfeForm";
import { Button } from "react-bootstrap";

const Professors = ({ fillForm, form, setForm }) => {
  const [profes, setProfe] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [newProfe, setNewProfe] = useState(null);
  const [editable, setEditable] = useState(null);

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
    fetch("/api/v1/teachers", requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        console.log(data);
        setProfe(data);
      })
      .catch(function (error) {
        setError({ msg: error });
      })
      .finally(() => {
        setLoading(false);
      });
  }
  // POST PROFES (CREATE)
  const createProfe = (event) => {
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify(form),
    };
    fetch("/api/v1/teachers/", requestOptions)
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
        getProfes();
        console.log(data);
      })
      .catch((error) => {
        setError({ msg: error });
      });
  };
  // EDIT COURSES (PUT)
  const updateProfe = (id, e) => {
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify(form),
    };
    fetch(`/api/v1/teachers/${id}`, requestOptions)
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
        getProfes();
        setEditable(null);
        console.log(data);
      })
      .catch((error) => {
        setError({ msg: error });
      });
  };
  // POST COURSES (DELETE)
  const deleteProfe = (id, e) => {
    e.preventDefault();
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    };
    fetch(`/api/v1/teachers/${id}`, requestOptions)
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
        getProfes();
      });
  };
  //EDITCOURSE
  const editProfe = () => {
    setEditable({ editable: true });
  };

  // CAMBIOS DE ESTADO PARA EL POST
  const mountForm = () => {
    setNewProfe(true);
  };
  const unMountForm = () => {
    setNewProfe(false);
  };
  useEffect(() => {
    getProfes();
  }, []);
  return (
    <CourseSection>
      <h2>Hola</h2>
      {newProfe ? (
        <>
          <NewProfeForm createProfe={createProfe} fillForm={fillForm} />
          <Button onClick={unMountForm} className="btn btn-primary">
            ¡Estoy listo!
          </Button>
        </>
      ) : (
        <Button onClick={mountForm} className="btn btn-primary">
          New
        </Button>
      )}
      <ProfessorsList
        profes={profes}
        createProfe={createProfe}
        updateProfe={updateProfe}
        deleteProfe={deleteProfe}
        editProfe={editProfe}
        editable={editable}
        fillForm={fillForm}
      />
      {error && <>Hubo un error</>}
      {loading && <>Cargando</>}
    </CourseSection>
  );
};

export default Professors;
