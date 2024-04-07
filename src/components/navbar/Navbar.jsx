import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <span>Tuğba Yılmaz</span>
        <div className="social">
          <a href="#">
            {" "}
            <img className="png" src="/linkedin.png"></img>{" "}
          </a>
          <a href="#">
            {" "}
            <img className="png" src="/github.png"></img>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
