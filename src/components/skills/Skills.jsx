import { useRef } from "react";
import "./skills.scss";
import { motion, useInView } from "framer-motion";

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

const Skills = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  const skills = [
    {
      title: "Programming Languages",
      description: "Python, Java, TypeScript, C#, JavaScript",
    },
    {
      title: "Front-End Development",
      description:
        "HTML, CSS/SCSS, Tailwind CSS, React.js, Vue.js, Next.js, Styled Components",
    },
    {
      title: "Back-End & Databases",
      description:
        "Node.js, Express.js, .NET, MySQL, PostgreSQL (EF Core)",
    },
    {
      title: "Tools & Technologies",
      description:
        "Git, Jira, Trello, Webpack, Babel, Google Analytics, Google Tag Manager, Storybook, Sentry, Playwright, Jest",
    },
    {
      title: "AI & Intelligent Systems",
      description:
        "Real-time AI Workflows, LLM Integration (OpenAI API), AI-driven Automation, WebSocket Streaming",
    },
    {
      title: "Education & Awards",
      description:
        "BS in Computer Engineering, Muğla Sıtkı Koçman University (2019-2024). Google Solution Challenge Global Top 50 Finalist (2021), Tubitak 2209-A Recipient.",
    },
  ];

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/assets/images/people.webp" />
          <h1>
            <motion.b whileHover={{ color: "#5E7EA9" }}>Evolving</motion.b>{" "}
            Expertise
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "#5E7EA9" }}> My Diverse</motion.b>{" "}
            Skills.
          </h1>
          <button>What Skills Do I have?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        {skills.map((skill, index) => (
          <motion.div
            className="box"
            key={index}
          >
            <h2>{skill.title}</h2>
            <p>{skill.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
