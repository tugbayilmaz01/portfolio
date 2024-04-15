import "./app.scss";
import Contact from "./components/contact/Contact";
import Developer from "./components/developer/Developer";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Developer />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Skills />
      </section>
      <section id="Portfolio">
        {" "}
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
