import styled from "styled-components";

export const SideNavContainer = styled.div`
  width: 18vw;
  height: 100vh;
  background-color: #ffffff;
  background-image: url("https://www.transparenttextures.com/patterns/asfalt-dark.png");
  backdrop-filter: blur(5px) !important;
  position: fixed;
  transition: width 1s;
  cursor: pointer;
  z-index: 2;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  /* :hover {
    width: 100vw;
    background-color: #000266;
  } */
`;

export const UnorderedList = styled.div`
  list-style-type: none;
  padding: 20px;
`;

export const ListItems = styled.div`
  margin: 10px 0 10px 0;
  text-decoration: none;
  padding: 10px 30px 10px 30px;
  text-align: center;
  transition: background-color 0.5s;
  font-size: 20px;
  :hover {
    background-color: #000266;
    color: white;
  }
`;
