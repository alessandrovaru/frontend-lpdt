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
export const DashboardContainer = styled.section`
  padding: 0 0 5vh 230px;
  min-height: 95vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  animation: ${divReveal} 0.8s linear;
  background: #f9fafb;
`;

export const MainSection = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SideSection = styled.div`
  width: 30%;
  margin-right: 1vw;
`;

export const SideSectionFirstCard = styled.div`
  background-color: white;
  width: auto;
  height: 200px;
  margin-bottom: 20px;
`;
export const SideSectionSecondCard = styled.div`
  background-color: white;
  width: auto;
  height: 200px;
  margin-bottom: 20px;
`;

export const Card1 = styled.div`
  grid-column: 1 / 4;
  grid-row: 1;
  border-radius: 5px;
  background: linear-gradient(276.85deg, #0075ff 0%, #07042b 100%);
  backdrop-filter: blur(5px) !important;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 260px;
  position: relative;
  padding: 40px;
`;

export const Card1H2 = styled.h2`
  font-size: 34px;
  font-weight: bold;
  color: white;
`;

export const Ronaldo = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 350px;
`;

export const Card2 = styled.div`
  grid-column: 1 / 4;
  grid-row: 2;
  border-radius: 5px;
  background: linear-gradient(276.85deg, #0075ff 0%, #07042b 100%);
  backdrop-filter: blur(5px) !important;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 260px;
  position: relative;
  padding: 40px;
`;

export const Ronaldo2 = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 250px;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
  width: 100%;
`;

export const Texture = styled.img`
  width: 100%;
  mix-blend-mode: screen;
`;

export const TextureContainer = styled.div`
  overflow: hidden;
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  border-radius: 10px;
`;
