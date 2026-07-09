import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import goWealthPic from "../../../public/assets/images/gowealth.png";
import wishlistPic from "../../../public/assets/images/wishlist.png";

const items = [
  {
    id: 1,
    title: "Wishtra",
    img: wishlistPic,
    desc: "Wishtra helps you keep track of everything you love while staying on budget. You can organize your wishes into custom categories, plan your shopping by month, and share your lists with friends so they always know exactly what to get you. You can also discover new trends by seeing what others are wishing for.",
    demoLink: "https://www.wishtra.com/",
  },
  {
    id: 2,
    title: "Go Wealth",
    img: goWealthPic,
    desc: "This full-stack project, built with React and Node.js, provides money management and income-expense tracking, including effort calculation for purchases.",
    demoLink: "https://labor-calculation.vercel.app/",
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
    <div className="portfolio" ref={ref} id="Portfolio">
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
