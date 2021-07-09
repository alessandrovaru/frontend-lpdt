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
  padding: 5vh 0 5vh 20vw;
  min-height: 98vh;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  animation: ${divReveal} 0.8s linear;
`;

export const MainSection = styled.div`
  width: 70%;
  margin-right: 1vw;
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
  background-color: #00026675;
  backdrop-filter: blur(5px) !important;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 500px;
  position: relative;
  padding: 40px;
`;

export const Card1H2 = styled.h2`
  font-size: 140px;
  font-weight: bold;
`;

export const Ronaldo = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
`;

export const Card2 = styled.div`
  grid-column: 1 / 2;
  grid-row: 2;
  border-radius: 5px;
  background-color: #00026675;
  backdrop-filter: blur(5px) !important;
  cursor: pointer;
  display: flex;
  height: 400px;
  position: relative;
  padding: 20px;
`;

export const Card3 = styled.div`
  grid-column: 2 / 4;
  grid-row: 2;
  border-radius: 5px;
  background-color: #00026675;
  backdrop-filter: blur(5px) !important;
  cursor: pointer;
  display: flex;
  height: 400px;
  padding: 20px;
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
`;
