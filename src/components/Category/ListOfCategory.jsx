import React from "react";
import Category from "./Category";
import { CategoryContainer, CategoryCard } from "./styles";

const ListOfCategory = () => {
  return (
    <div>
      <CategoryContainer>
        {[1, 2].map((category) => (
          <CategoryCard key={category}>
            <Category />
          </CategoryCard>
        ))}
      </CategoryContainer>
    </div>
  );
};

export default ListOfCategory;
