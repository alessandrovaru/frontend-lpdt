import styled from "styled-components";
import { keyframes } from "styled-components";
const divReveal = keyframes`
  from {
    
    opacity: 0
  }

  to {
    
    opacity:1;
  }
`;

export const CourseSection = styled.section`
  padding: 5vh 0 5vh 20vw;
  min-height: 98vh;
  color: white;
  animation: ${divReveal} 0.8s linear;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: auto;
  color: black;
  padding: 20px 20px 20px 0;
`;

export const CourseCard = styled.div`
  background-color: white;
  padding: 10px;
  margin: 10px;
  margin: 10px 10px 10px 0;
  border-radius: 5px;
  min-height: 300px;
  cursor: pointer;
`;
