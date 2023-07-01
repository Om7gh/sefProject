import React, { useState } from "react";
import "./Navbar.css";
import Social_Media from "../SocialMedia/Social_Media";
import Logo from "../../Asset/logo.png";
import { RiMenu3Fill } from "react-icons/ri";
const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handelClick = (e) => {
    const elements = document.querySelectorAll(".underline");
    elements.forEach((element) => {
      element.classList.remove("active");
    });

    const clickedElement =
      e.currentTarget.parentNode.querySelector(".underline");
    clickedElement.classList.add("active");

    setOpenMenu(false);
  };
  return (
    <nav className="navigation">
      <div className="brand">
        <img src={Logo} alt="Logo" />
      </div>
      <div className={openMenu ? "open links" : "links"}>
        <ul className="lists">
          <li>
            <a href="#home" onClick={(e) => handelClick(e)}>
              Home
            </a>
            <div className="underline active"></div>
          </li>
          <li>
            <a href="#skills" onClick={(e) => handelClick(e)}>
              Skills
            </a>
            <div className="underline"></div>
          </li>
          <li>
            <a href="#project" onClick={(e) => handelClick(e)}>
              Project
            </a>
            <div className="underline"></div>
          </li>
        </ul>
        <Social_Media />
        <div>
          <button className="btn">
            <a href="#contact">Let's Talk</a>
          </button>
        </div>
      </div>
      <div
        className="toggle"
        onClick={() => setOpenMenu(openMenu ? false : true)}
      >
        <RiMenu3Fill className="svg" />
      </div>
    </nav>
  );
};

export default Navigation;
