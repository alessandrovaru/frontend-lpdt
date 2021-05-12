import React from "react";

const DEFAULT_IMAGE =
  "https://uploads-ssl.webflow.com/5fe7644f3e57ba663d4c2656/609989ce531a293b61e1d1b5_Emelec.jpg";

const Category = ({ cover = DEFAULT_IMAGE, path, emoji }) => {
  return (
    <div>
      <p></p>
      <a href={path} rel="noopener noreferrer">
        <img src={cover} alt="foto" />
        {emoji}
      </a>
    </div>
  );
};

export default Category;
