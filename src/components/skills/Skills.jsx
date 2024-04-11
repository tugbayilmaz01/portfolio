import "./skills.scss";
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const skills = [
  {
    title: "Skill 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Skill 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Skill 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Skill 4",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const Skills = () => {
  return (
    <motion.div
      className="skills"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I pursue my interests, constantly learning
          <br /> & enhancing my skills to better myself.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/assets/images/people.webp" />
          <h1>
            <b>Evolving</b> Expertise
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>My Diverse</b> Skills.
          </h1>
          <button>What skills do I have?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        {skills.map((skill, index) => (
          <motion.div
            whileHover={{ background: "lightgray", color: "black" }}
            className="box"
            key={index}
          >
            <h2>{skill.title}</h2>
            <p>{skill.description}</p>
            <button>Go</button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
