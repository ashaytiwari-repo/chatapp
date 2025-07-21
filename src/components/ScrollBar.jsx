import { motion, useScroll } from "framer-motion";

export default function ScrollBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "10px",
        width: "100%",
        background: "#ff0088",
        transformOrigin: "left",
        scaleX: scrollYProgress,
        zIndex: 9999,
      }}
    />
  );
}
