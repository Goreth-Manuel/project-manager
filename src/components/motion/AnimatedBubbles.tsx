import React from "react";
import { motion } from "framer-motion";
import "./style.module.css";

const bubbles = [
  { top: "10%", left: "20%", size: 150 },
  { top: "60%", left: "80%", size: 200 },
  { top: "80%", left: "10%", size: 120 },
];

const AnimatedBubbles: React.FC = () => {
  return (
    <div className="bubble-container">
      {bubbles.map((bubble, index) => (
        <motion.div
          key={index}
          className="bubble"
          style={{
            top: bubble.top,
            left: bubble.left,
            width: bubble.size,
            height: bubble.size,
          }}
          animate={{ y: [0, -30, 0] }}
          transition={{
            duration: 5 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBubbles;
