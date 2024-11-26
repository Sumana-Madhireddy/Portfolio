import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './StarsCanvas.scss';

const Star = ({ index }) => {
  const [style, setStyle] = useState({});
  const [animation, setAnimation] = useState({});

  useEffect(() => {
    const randomX = Math.random() * 100 + '%'; 
    const randomY = Math.random() * 100 + '%'; 
    const randomSize = Math.random() * 2.5 + 0.5 + 'px'; 
    const randomAnimationDuration = Math.random() * 5 + 5 + 's'; 

    setStyle({
      left: randomX,
      top: randomY,
      width: randomSize,
      height: randomSize,
      animationDuration: randomAnimationDuration,
    });

    setAnimation({
      x: [Math.random() * 200 - 100 + '%', Math.random() * 200 - 100 + '%'], 
      y: [Math.random() * 200 - 100 + '%', Math.random() * 200 - 100 + '%'], 
    });
  }, [index]);

  return (
    <motion.div
      className="star"
      style={style}
      animate={{
        x: animation.x, 
        y: animation.y, 
      }}
      transition={{
        repeat: Infinity,
        repeatType: 'loop',
        duration: 20 + Math.random() * 10, 
        ease: 'linear', 
      }}
    />
  );
};

export default Star;
