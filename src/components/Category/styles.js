import styled from "styled-components";

export const Anchor = styled.a`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
`;

export const Image = styled.img`
  border: 1px solib black;
  box-shadow: 0px 10px 14px black;
  border-radius: 50%;
  height: auto;
  overflow: hidden;
  object-fit: cover;
  height: 75px;
  width: 75px;
`;

export const CategoryContainer = styled.div`
  background-color: red;
  padding: 10px 10px 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
export const CategoryCard = styled.div`
  background-color: blue;
  margin: 10px 10px 10px 0;
`;
