import styled from "styled-components";
import { keyframes } from "styled-components";

export const SideNavContainer = styled.div`
  width: 200px;
  height: 100vh;
  background: linear-gradient(180deg, #2279f2 0%, #161243 100%);
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
  padding: 10px 30px 10px 30px;
  text-align: left;
  transition: background-color 0.5s;
  font-size: 12px;
  color: white;
  :hover {
    background-color: #000266;
    color: white;
  }
`;
const rotation = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(359deg);
}
`;

export const LogoBlanco = styled.img`
  animation: ${rotation} 40s infinite linear;
`;
