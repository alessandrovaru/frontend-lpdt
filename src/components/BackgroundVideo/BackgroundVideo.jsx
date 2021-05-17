import React from "react";
import { VideoBack } from "./styles";

const BackgroundVideo = () => {
  return (
    <VideoBack autoPlay loop muted id="myVideo">
      <source
        src="https://uploads-ssl.webflow.com/5fcff1fc5c74641bc1f16ee9/605582fc590b8c692d7f05e1_BACKGROUND-transcode.mp4"
        type="video/mp4"
      ></source>
    </VideoBack>
  );
};

export default BackgroundVideo;
