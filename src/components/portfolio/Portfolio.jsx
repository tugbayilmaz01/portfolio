import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import goWealthPic from "../../../public/assets/images/gowealth.png";
import ibms from "../../../public/assets/images/ibms.png";
import shellp from "../../../public/assets/images/shellp.png";
import friendify from "../../../public/assets/images/friendify.png";

const items = [
  {
    id: 1,
    title: "Go Wealth",
    img: goWealthPic,
    desc: "This full-stack project, built with React and Node.js, provides money management and income-expense tracking, including effort calculation for purchases.",
    demoLink: "https://labor-calculation.vercel.app/",
  },
  {
    id: 2,
    title: "Interview & Bootcamp Management System",
    img: ibms,
    desc: "This is a group project we are doing with React.js and Node.js as a graduation project. A project that enables companies to use and manage new employees during and after the recruitment process.",
  },
  {
    id: 3,
    title: "Roadmap Based Workspace Application",
    img: shellp,
    desc: "Our group project, which we aim to cover everything from resource recommendations needed by beginners to the software we made with React and Nodejs with the support of TUBITAK 2209-A, from tracking to-do lists and roadmaps to measuring working time.",
  },
  {
    id: 4,
    title: "Friendify (on-going)",
    img: friendify,
    desc: "It's a social media website that I'm still developing. I write with React.js, Node,js and MySQL, which also includes dark & light modes for instant interactions. (message, post, notification, like, etc.)",
  },
];

const Section = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.demoLink}>
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Section item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
