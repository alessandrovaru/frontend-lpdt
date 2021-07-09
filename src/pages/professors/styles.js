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
  animation: ${divReveal} 0.8s linear;
`;
