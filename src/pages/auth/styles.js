import styled from "styled-components";
import { keyframes } from "styled-components";

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
`;

const divReveal = keyframes`
  from {
    
    opacity: 0
  }

  to {
    
    opacity:1;
  }
`;

export const LoginContainer = styled.div`
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px) !important;
  padding: 100px 140px 100px 140px;
  animation: ${divReveal} 0.5s linear;
  height: auto;
  transition: box-shadow 0.1s, transform 0.1s, border-radius 0.2s;
  border-radius: 5px;

  :hover {
    border-radius: 50%;
    padding: 140px 180px 140px 180px;
  }
`;

export const SignUpContainer = styled.div`
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px) !important;
  padding: 100px 140px 100px 140px;
  animation: ${divReveal} 0.5s linear;
  height: auto;
  transition: box-shadow 0.1s, transform 0.1s, border-radius 0.2s;
  border-radius: 5px;

  :hover {
    border-radius: 50%;
    padding: 140px 180px 140px 180px;
  }
`;
