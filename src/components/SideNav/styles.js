import styled from "styled-components";

export const SideNavContainer = styled.div`
  width: 5vw;
  height: 100vh;
  background-color: white;
  position: fixed;
  transition: width 0.2s;
  cursor: pointer;

  :hover {
    width: 30vw;
  }
`;
