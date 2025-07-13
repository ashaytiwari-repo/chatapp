
import { motion } from "framer-motion";

function Welcome() {
  const words = "WELCOME TO MY WEBPAGE".split(" ");
  const worddot = "...".split(""); // ['.', '.', '.']

  return (
    <>
      <motion.h3 className="welcome"
        style={{
          overflow: "hidden",
          whiteSpace: "nowrap",
          display: "inline-block",
        }}
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1 }}
        
      >
        {words.map((word, i) => (
          <span key={i}>{word} </span>
        ))}

        {/* Animate each dot with a delay */}
        {worddot.map((dot, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.3 + i * 0.2, // ⏳ delay each dot
              duration: 0.3,
            }}
          >
            {dot}
          </motion.span>
        ))}
      </motion.h3>
   </>
  );
}

export default Welcome;

