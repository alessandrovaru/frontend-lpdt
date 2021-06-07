import React from "react";
import NewCourseForm from "../../components/Form/NewCourseForm";

const NewCourse = ({ fillForm, createCourse }) => {
  return (
    <>
      <NewCourseForm createCourse={createCourse} fillForm={fillForm} />
    </>
  );
};

export default NewCourse;
