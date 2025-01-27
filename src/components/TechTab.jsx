// TechTab.jsx
import { motion } from "framer-motion";

const TechTab = ({ name, position }) => {
  const { x, y } = position;

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          position: "fixed",
          top: y, // Y position from HoverTech
          left: x, // X position from HoverTech
          transform: "translate(-50%, -100%)", // Center horizontally and position above
          zIndex: 10, // Ensure it's above other elements
          pointerEvents: "auto",
        }}
      >
        {/* Tooltip */}
        <div>
          <motion.div
            className="py-1 px-3 text-lg rounded-3xl  z-10"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{
              duration: 5,
              ease: "linear",
              repeat: Infinity,
            }}
            style={{
              transform: "translate(-50%)", // Center horizontally and vertically
              background:
                "linear-gradient(-30deg, #d62964, #ab38c7, #292f88, #20b7df)",
              backgroundSize: "400% 400%",
              // position: "",
              zIndex: 10, // Above the arrow
            }}
          >
            <p className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 via-white to-yellow-100">
              {name}
            </p>
          </motion.div>

          {/* Arrow Positioned Behind */}
          <motion.div
            style={{
              position: "absolute",
              top: "-15%", // Position directly below the tooltip
              transform: `translateX(-50%)`, // Center horizontally and vertically
              width: "16px",
              height: "8px",
              background:
                "linear-gradient(-30deg, #d62964, #ab38c7, #292f88, #20b7df)",
              backgroundSize: "400% 400%",
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)", // Downward pointing triangle
              zIndex: -1, // Behind the tooltip
            }}
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{
              duration: 5,
              ease: "linear",
              repeat: Infinity,
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default TechTab;
