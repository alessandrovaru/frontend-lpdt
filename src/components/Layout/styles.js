import styled from "styled-components";

import background from "../../img/backgrounds/overlay5.jpg";

export const Overlay = styled.div`
  width: 100vw;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  mix-blend-mode: color-dodge;
  opacity: 0.5;
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -1;
`;

export const OverlayColor = styled.div`
  width: 100vw;
  background: black;
  background-size: cover;
  opacity: 0.5;
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -2;
`;
