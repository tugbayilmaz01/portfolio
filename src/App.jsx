import "./app.scss";
import Contact from "./components/contact/Contact";
import Developer from "./components/developer/Developer";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Developer />
      </section>
      <section id="Services">
        <Skills />
      </section>
      <section id="Experience">
        <Experience />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
