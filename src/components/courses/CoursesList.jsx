import React from "react";

const CoursesList = ({ cursos }) => {
  return (
    <>
      {cursos.map((c) => (
        <p key={c.id}>{c.name}</p>
      ))}
    </>
  );
};

export default CoursesList;
