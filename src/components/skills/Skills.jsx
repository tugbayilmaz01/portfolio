import "./skills.scss";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div className="skills">
      <motion.div className="textContainer">
        <p>
          I pursue my interests, constantly learning
          <br /> & enhancing my skills to better myself.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <img src="/web-development.png" />
          <h1>
            <b>Evolving</b> Expertise
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>My Diverse</b> Skills
          </h1>
          <button>What skills do I have?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer">
        <div className="box">
          <h2>Branding</h2>
          <p>kfgmfkgmfkg</p>
        </div>
        <div className="box">
          <h2>Branding</h2>
          <p>kfgmfkgmfkg</p>
        </div>
        <div className="box">
          <h2>Branding</h2>
          <p>kfgmfkgmfkg</p>
        </div>
        <div className="box">
          <h2>Branding</h2>
          <p>kfgmfkgmfkg</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
