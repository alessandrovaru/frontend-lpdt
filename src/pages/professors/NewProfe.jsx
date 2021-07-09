import React from "react";
import NewProfeForm from "../../components/Form/NewProfeForm";

const NewProfe = ({ fillForm, createProfe }) => {
  return (
    <>
      <NewProfeForm createCourse={createProfe} fillForm={fillForm} />
    </>
  );
};

export default NewProfe;
