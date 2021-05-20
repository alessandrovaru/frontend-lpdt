import styled from "styled-components";
import { keyframes } from "styled-components";

const loginShow = keyframes`
  from {
    opacity: 0
  }

  to {
    opacity:1;
  }
`;
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  height: 90vh;
  color: white;
  position: relative;
  animation: ${loginShow} 1s linear;
`;

export const Botones = styled.div`
  width: auto;
  display: flex;

  justify-content: space-around;
`;
