import React, { useState, useEffect } from 'react';
import "./slider.Module.css"

function ImageSlider({ images, interval = 3000 }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(currentImageIndex => (currentImageIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [interval, images, currentImageIndex]);

  return (
    <div className="image-slider">
      <img src={images[currentImageIndex]} alt="Slider" />
    </div>
  );
}

export default ImageSlider;
