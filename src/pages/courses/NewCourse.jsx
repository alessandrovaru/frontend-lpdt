import React from "react";
import NewCourseForm from "../../components/Form/NewCourseForm";
import { CourseSection } from "./styles";

const NewCourse = ({ fillForm, createCourse }) => {
  return (
    <CourseSection>
      <NewCourseForm createCourse={createCourse} fillForm={fillForm} />
    </CourseSection>
  );
};

export default NewCourse;
