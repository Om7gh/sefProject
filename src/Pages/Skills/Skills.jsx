import React, { useEffect, useState } from "react";
import "./Skills.css";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const Skills = () => {
  const skill = [
    {
      id: 1,
      name: "HTML",
      pourcentage: "95%",
    },
    {
      id: 2,
      name: "CSS",
      pourcentage: "90%",
    },
    {
      id: 3,
      name: "JAVASCRIPT",
      pourcentage: "75%",
    },
    {
      id: 4,
      name: "SASS",
      pourcentage: "70%",
    },
    {
      id: 5,
      name: "React",
      pourcentage: "80%",
    },
    {
      id: 6,
      name: "BOOTSTRAP",
      pourcentage: "95%",
    },
    {
      id: 7,
      name: "TAILWIND",
      pourcentage: "90%",
    },
    {
      id: 8,
      name: "EXPRESS JS",
      pourcentage: "50%",
    },
    {
      id: 9,
      name: "MONGODB",
      pourcentage: "50%",
    },
    {
      id: 10,
      name: "NEXT Js",
      pourcentage: "40%",
    },
    {
      id: 11,
      name: "Illustrator",
      pourcentage: "50%",
    },
    {
      id: 12,
      name: "PHOTOSHOP",
      pourcentage: "70%",
    },
  ];

  const [skills, setSkills] = useState(skill);
  const [skillIndex, setSkillIndex] = useState(0);

  useEffect(() => {
    if (skillIndex > skills.length - 1) {
      setSkillIndex(0);
    }
  }, [skillIndex, skills]);

  useEffect(() => {
    let slider = setInterval(() => {
      setSkillIndex((prevIndex) => prevIndex + 3);
    }, 3000);

    return () => clearInterval(slider);
  }, []);

  const mobile = window.innerWidth;

  const moveSlideBack = () => {
    setSkillIndex((prevIndex) => prevIndex - 1);
    if (skillIndex < 0) return false;
  };
  const moveSlide = () => {
    setSkillIndex((prevIndex) => prevIndex + 1);
    if (skillIndex > skills.length - 1) {
      setSkillIndex(0);
    }
  };

  return (
    <div className="skills" id="skills">
      <div className="container">
        <h2 data-text="Omar's Skills">Omar's Skills</h2>
        <div className="arrow left" onClick={moveSlideBack}>
          <BsFillArrowLeftCircleFill />
        </div>
        <div className="box">
          {mobile > 754 ? (
            <>
              <div className="small_box">
                <div className="cercle">
                  <p>{skills[skillIndex]?.pourcentage}</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="160px"
                    height="160px"
                  >
                    <defs>
                      <linearGradient id="GradientColor">
                        <stop offset="0%" stop-color="var(--main-color)" />
                        <stop offset="80%" stop-color="#111" />
                      </linearGradient>
                    </defs>
                    <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="160px"
                    height="160px"
                  >
                    <defs>
                      <linearGradient id="GradientColor">
                        <stop offset="0%" stop-color="#e91e63" />
                        <stop offset="100%" stop-color="#673ab7" />
                      </linearGradient>
                    </defs>
                    <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                  </svg>
                </div>
                <h3>{skills[skillIndex]?.name}</h3>
              </div>
              <div className="small_box">
                <div className="cercle">
                  <p>{skills[skillIndex + 1]?.pourcentage}</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="160px"
                    height="160px"
                  >
                    <defs>
                      <linearGradient id="GradientColor">
                        <stop offset="0%" stop-color="#e91e63" />
                        <stop offset="100%" stop-color="#673ab7" />
                      </linearGradient>
                    </defs>
                    <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                  </svg>
                </div>
                <h3>{skills[skillIndex + 1]?.name}</h3>
              </div>
              <div className="small_box">
                <div className="cercle">
                  <p>{skills[skillIndex + 2]?.pourcentage}</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="160px"
                    height="160px"
                  >
                    <defs>
                      <linearGradient id="GradientColor">
                        <stop offset="0%" stop-color="#e91e63" />
                        <stop offset="100%" stop-color="#673ab7" />
                      </linearGradient>
                    </defs>
                    <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                  </svg>
                </div>
                <h3>{skills[skillIndex + 2]?.name}</h3>
              </div>
            </>
          ) : (
            <>
              <div className="small_box">
                <div className="cercle">
                  <p>{skills[skillIndex]?.pourcentage}</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="100px"
                    height="100px"
                  >
                    <defs>
                      <linearGradient id="GradientColor">
                        <stop offset="0%" stop-color="#e91e63" />
                        <stop offset="100%" stop-color="#673ab7" />
                      </linearGradient>
                    </defs>
                    <circle cx="51" cy="50" r="35" stroke-linecap="round" />
                  </svg>
                </div>
                <h3>{skills[skillIndex]?.name}</h3>
              </div>
              <div className="small_box">
                <div className="cercle">
                  <p>{skills[skillIndex + 1]?.pourcentage}</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="100px"
                    height="100px"
                  >
                    <defs>
                      <linearGradient id="GradientColor">
                        <stop offset="0%" stop-color="#e91e63" />
                        <stop offset="100%" stop-color="#673ab7" />
                      </linearGradient>
                    </defs>
                    <circle cx="51" cy="50" r="35" stroke-linecap="round" />
                  </svg>
                </div>
                <h3>{skills[skillIndex + 1]?.name}</h3>
              </div>
            </>
          )}
        </div>{" "}
        <div className="arrow right" onClick={moveSlide}>
          <BsFillArrowRightCircleFill />
        </div>
        <p>Last Update {new Date().getFullYear()}.</p>
      </div>
    </div>
  );
};

export default Skills;
