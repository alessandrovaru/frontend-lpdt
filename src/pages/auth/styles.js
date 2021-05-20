import styled from "styled-components";
import { keyframes } from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  text-align: left;
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
  backdrop-filter: blur(5px);
  padding: 20px 100px 20px 100px;
  animation: ${divReveal} 0.5s linear;
  padding: 80px 250px 80px 80px;
  height: auto;
  transition: box-shadow 0.1s, transform 0.1s;

  :hover {
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.6);
    cursor: pointer;
  }
`;

export const SignUpContainer = styled.div`
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  padding: 20px 100px 20px 100px;
  animation: ${divReveal} 1s linear;
  padding: 80px 250px 80px 80px;
  height: auto;
`;
