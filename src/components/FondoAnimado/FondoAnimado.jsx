import React from 'react';
import './FondoAnimado.css';

const BackgroundVideo = () => {
  return (
    <div className="background-video-container">
      <video autoPlay loop muted className="background-video">
        <source src="/fondo2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
