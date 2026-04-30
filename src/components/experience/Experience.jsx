import "./experience.scss";
import { motion } from "framer-motion";

const variants = {
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
};

const Experience = () => {
  const experiences = [
    {
      company: "Digitopia",
      role: "Frontend Developer",
      date: "01.10.2024 – 30.04.2026",
      desc: [
        "Engineered real-time, AI-powered workflows using WebSockets to convert static tools into intelligent assessment engines.",
        "Architected a scalable 'Mini AI Readiness' platform using React, Next.js, and TypeScript.",
        "Implemented automated PDF generation and interactive data dashboards, improving overall UX.",
        "Established a robust QA pipeline with Playwright and managed deployments using AWS (EC2 & S3)."
      ],
    },
    {
      company: "Slush Yazılım",
      role: "Full Stack Developer",
      date: "16.05.2024 – 30.10.2024",
      desc: [
        "Optimized high-performance websites using Vuetify 2 & 3, translating Figma designs into pixel-perfect components.",
        "Developed scalable server-side applications with Node.js and TypeScript, designing RESTful APIs.",
        "Implemented SEO best practices and Google Analytics, boosting organic traffic and conversion rates."
      ],
    },
    {
      company: "Mava Yazılım",
      role: "Full Stack Developer",
      date: "13.02.2023 - 15.02.2024",
      desc: [
        "Developed Vihobook reservation platform using Node.js backend and React frontend.",
        "Designed responsive ERP and CRM pages using Vue.js and Tailwind CSS for scalable frontend architecture."
      ],
    },
  ];

  return (
    <motion.div
      className="experience"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "#5E7EA9" }}>Work</motion.b> Experience
          </h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        {experiences.map((exp, index) => (
          <motion.div
            className="box"
            key={index}
          >
            <h2>{exp.company}</h2>
            <h3>{exp.role}</h3>
            <span>{exp.date}</span>
            <ul>
              {exp.desc.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Experience;
