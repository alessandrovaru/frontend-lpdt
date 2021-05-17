import React from "react";
import Category from "./Category";

const ListOfCategory = () => {
  return (
    <div>
      <ul>
        {[1, 2].map((category) => (
          <li key={category}>
            <Category />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfCategory;
