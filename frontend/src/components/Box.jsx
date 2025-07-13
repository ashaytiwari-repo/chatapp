// Box.jsx
import { motion } from "framer-motion";

export default function Gestures() {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={box}
    >
      <p style={{ color: "white", textAlign: "center" }}>Gesture Box</p>
    </motion.div>
  );
}

const box = {
  width: "500px",          // ✅ smaller width to prevent overflow
  height: "500px",
  backgroundColor: "#9911ff",
  borderRadius: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "20px",
};
