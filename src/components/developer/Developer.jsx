import "./developer.scss";
import { motion } from "framer-motion";
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const Developer = () => {
  return (
    <div className="developer">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Tuğba Yılmaz</motion.h2>
          <motion.h1 variants={textVariants}>Front-End Developer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              See the Lates Works
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          {/*         <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
          ></motion.img> */}
        </motion.div>
      </div>
      <div className="slidingContainer">
        Front-End & Full Stack Developer - UI UX Developer
      </div>
      <div className="imageContainer">
        <motion.img src="/developer.png" />
      </div>
    </div>
  );
};

export default Developer;
