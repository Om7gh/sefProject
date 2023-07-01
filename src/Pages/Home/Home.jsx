import React from "react";
import Banner from "../../Asset/home.avif";
import Banner1 from "../../Asset/banner1.png";
import "./Home.css";
import "./index.scss";
import { Typewriter, Cursor } from "react-simple-typewriter";
import Cv from "../../Asset/cv.pdf";
const Home = () => {
  const props = {
    words: ["FrontEnd Developper", "Graphic Designer", "Freelancer"],
    typeSpeed: 100,
    deleteSpeed: 70,
    loop: 0,
  };
  return (
    <div className="home" id="home">
      <img src={Banner} alt="home-img" className="bg-img" />
      <div className="leftiti">
        <h2>
          Bring Your <span className="stroke">Idea</span> to{" "}
          <span className="stroke">Life</span>
        </h2>
        <h3>
          With our Corner <span>Omar Ghazi </span>a :
        </h3>
        <p>
          <Typewriter {...props} />
          <Cursor cursorColor="white" />
        </p>
        <button>
          <a href={Cv} download>
            Donwload cv
          </a>
        </button>
      </div>
      <div className="rightin">
        <div className="banner1">
          <img src={Banner1} alt="banner" />
        </div>
        <div className="banner2">
          <p>+1000 Hour</p>
          <p>Of Coding</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
