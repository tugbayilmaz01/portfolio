import { motion } from "framer-motion";
import "./contact.scss";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let’s work together.</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>tugbayill01@gmail.com</span>
        </motion.div>

        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>0 538 569 0393</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
