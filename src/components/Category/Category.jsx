import React from "react";
import { Anchor, Image } from "./styles";

const DEFAULT_IMAGE =
  "https://uploads-ssl.webflow.com/5fe7644f3e57ba663d4c2656/609989ce531a293b61e1d1b5_Emelec.jpg";

const Category = ({ cover = DEFAULT_IMAGE, path, emoji }) => {
  return (
    <div>
      <p></p>
      <Anchor href={path} rel="noopener noreferrer">
        <Image src={cover} alt="foto" />
      </Anchor>
    </div>
  );
};

export default Category;
