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
export const AdvisoryDashboardContainer = styled.section`
  padding: 0 30px 5vh 230px;
  min-height: 95vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  animation: ${divReveal} 0.8s linear;
  background: #f9fafb;
`;
