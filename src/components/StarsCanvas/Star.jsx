import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './StarsCanvas.scss';

const Star = ({ index }) => {
  const [style, setStyle] = useState({});
  const [animation, setAnimation] = useState({});

  useEffect(() => {
    const randomX = Math.random() * 100 + '%'; // Random x position
    const randomY = Math.random() * 100 + '%'; // Random y position
    const randomSize = Math.random() * 2.5 + 0.5 + 'px'; // Random size of the star
    const randomAnimationDuration = Math.random() * 5 + 5 + 's'; // Random duration for the animation

    setStyle({
      left: randomX,
      top: randomY,
      width: randomSize,
      height: randomSize,
      animationDuration: randomAnimationDuration,
    });

    // Randomize the motion effect for continuous movement
    setAnimation({
      x: [Math.random() * 200 - 100 + '%', Math.random() * 200 - 100 + '%'], // Random x path
      y: [Math.random() * 200 - 100 + '%', Math.random() * 200 - 100 + '%'], // Random y path
    });
  }, [index]);

  return (
    <motion.div
      className="star"
      style={style}
      animate={{
        x: animation.x, // Animate the x position
        y: animation.y, // Animate the y position
      }}
      transition={{
        repeat: Infinity,
        repeatType: 'loop',
        duration: 20 + Math.random() * 10, // Random speed for each star
        ease: 'linear', // Smooth continuous motion
      }}
    />
  );
};

export default Star;
