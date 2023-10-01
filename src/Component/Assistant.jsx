import React from 'react';
import { useSpring, animated } from 'react-spring';

function Assistant({ moveAssistantTo, assistantMessage, isActive }) {
  const springProps = useSpring({
    left: moveAssistantTo.x,
    bottom: moveAssistantTo.y,
    opacity: isActive ? 1 : 0
  });

  return (
    <animated.div className="absolute" style={springProps}>
      <img src="/path_to_your_image.png" alt="Assistant" className="w-20 h-20" />
      <p>{assistantMessage}</p>
    </animated.div>
  );
}

export default Assistant;
