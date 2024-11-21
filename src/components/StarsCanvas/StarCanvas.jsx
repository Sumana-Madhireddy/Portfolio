import React from 'react';
import Star from './Star';
import './StarsCanvas.scss';

const StarsCanvas = () => {
  const numStars = 100; // Set the number of stars

  return (
    <div className="stars-canvas">
      {Array.from({ length: numStars }).map((_, index) => (
        <Star key={index} index={index} />
      ))}
    </div>
  );
};

export default StarsCanvas;
