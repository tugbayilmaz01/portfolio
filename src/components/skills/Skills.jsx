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
			description: "Python, Java, Typescript, Javascript",
		},
		{
			title: "Front-End Development",
			description: "HTML, React.js, Vue.js, Next.js, Tailwind CSS, SCSS",
		},
		{
			title: "Back-End Development",
			description: "Node.js, Express.js, .NET",
		},
		{
			title: "Database / Tools",
			description: "MsSQL, Git, VSCode",
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
						<motion.b whileHover={{ color: "#5E7EA9" }}>Evolving</motion.b> Expertise
					</h1>
				</div>
				<div className="title">
					<h1>
						<motion.b whileHover={{ color: "#5E7EA9" }}> My Diverse</motion.b> Skills.
					</h1>
					<button>What Skills Do I have?</button>
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
					</motion.div>
				))}
			</motion.div>
		</motion.div>
	);
};

export default Skills;
