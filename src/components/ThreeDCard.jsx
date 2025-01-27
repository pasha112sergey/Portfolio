/* eslint-disable react/prop-types */
import { useState } from "react";

const ThreeDCard = ({ children, rotateDivisor = 10, hoverScale = 1.05 }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 }); // Reset rotation if desired
  };

  const handleMouseMove = (event) => {
    const { clientX, clientY, currentTarget } = event;
    const rect = currentTarget.getBoundingClientRect();
    const xRel = clientX - rect.left;
    const yRel = clientY - rect.top;

    const rotateX = -((yRel - rect.height / 2) / rotateDivisor);
    const rotateY = (xRel - rect.width / 2) / rotateDivisor;

    setRotation({ x: rotateX, y: rotateY });
  };

  return (
    <div
      className="card-container"
      style={{
        perspective: "1000px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <div
        className="card"
        style={{
          transform: `
            perspective(1000px)
            rotateX(${rotation.x}deg)
            rotateY(${rotation.y}deg)
            scale(${isHovered ? hoverScale : 1})
          `,

          borderRadius: "12px",
          boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "transform 0.2s ease", // Smooth scale transition
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ThreeDCard;
