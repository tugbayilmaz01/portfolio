import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <div></div>
        <div className="social">
          <a href="https://www.linkedin.com/in/tugbayilmaz01/">
            {" "}
            <img className="png" src="/assets/images/linkedin.png"></img>{" "}
          </a>
          <a href="https://github.com/tugbayilmaz01">
            {" "}
            <img className="png" src="/assets/images/github.png"></img>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
