import styled from "styled-components";

import background from "../../img/backgrounds/overlay5.jpg";

export const Overlay = styled.div`
  width: 100vw;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  mix-blend-mode: overlay;
  opacity: 1;
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -1;
`;

export const OverlayColor = styled.div`
  width: 100vw;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    0deg,
    rgb(182 232 255) 0%,
    rgba(0, 212, 255, 0.40379901960784315) 50%,
    rgb(89 191 230) 100%
  );
  background-size: cover;
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -2;
`;
