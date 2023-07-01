import React, { useState } from "react";
import "./Project.css";
import { AiOutlineGithub, AiFillEye } from "react-icons/ai";
import image1 from "../../Asset/1.png";
import image2 from "../../Asset/2.png";
import image3 from "../../Asset/3.png";
import image4 from "../../Asset/4.png";
import image5 from "../../Asset/5.png";
import image6 from "../../Asset/6.png";

const Project = () => {
  const project = [
    {
      title: "Book Store",
      image: image1,
      id: 1,
    },
    {
      title: "Gym Website",
      image: image2,
      id: 2,
    },
    {
      title: "Store Website",
      image: image3,
      id: 3,
    },
    {
      title: "Store2 Website",
      image: image4,
      id: 4,
    },
    {
      title: "Youtube Clone",
      image: image5,
      id: 5,
    },
    {
      title: "Space Website",
      image: image6,
      id: 6,
    },
  ];

  const [toggleSection, setToggleSection] = useState(1);

  const TabSection = (index) => {
    setToggleSection(index);
  };
  return (
    <div className="project" id="project">
      <div className="header">
        <h2>Projects</h2>
      </div>
      <div className="section-bar">
        <div
          className={toggleSection === 1 ? "section  active-bar" : "section"}
          onClick={() => TabSection(1)}
        >
          Section 1
        </div>
        <div
          className={toggleSection === 2 ? "section  active-bar" : "section"}
          onClick={() => TabSection(2)}
        >
          <a
            href="#contact"
            className={toggleSection === 2 ? "section  active-bar" : "section"}
          >
            Section 2
          </a>
        </div>
        <div
          className={toggleSection === 3 ? "section  active-bar" : "section"}
          onClick={() => TabSection(3)}
        >
          Section 3
        </div>
      </div>
      <div>
        <div
          className={
            toggleSection === 1
              ? "section-content active-content"
              : "section-content hide"
          }
        >
          {project?.map(({ title, image, id }, index) => {
            return (
              <>
                {" "}
                <div className="project-section " key={id}>
                  <h2>{title}</h2>
                  <img src={image} alt="project-img" key={id} />
                  <div className="hover-effect">
                    <AiFillEye />
                    <AiOutlineGithub />
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className={toggleSection === 3 ? "info  active-bar" : "info hide"}>
          <p>My Name is Omar and i Have 22 year , I love Web Develompent</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
