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

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-600%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
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
          <motion.h1 variants={textVariants}>Full-Stack Developer</motion.h1>
          <motion.p variants={textVariants} className="profileText">
            Fullstack Developer with 3 years of experience, specializing in the React and Next.js ecosystem with a solid
            foundation in Node.js and .NET. Lately, I’ve been focusing on architecting real-time AI-driven
            features and automating complex workflows using WebSockets—effectively bridging the gap between
            LLMs and seamless user interfaces.
          </motion.p>
        </motion.div>
      </div>
      <motion.div
        className="slidingContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Web Developer Full Stack Developer AI Solutions Cloud Architect
      </motion.div>
      <div className="imageContainer">
        <motion.img src="/assets/images/developer.png" />
      </div>
    </div>
  );
};

export default Developer;
