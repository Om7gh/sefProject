import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { CgFacebook } from "react-icons/cg";
import { FiInstagram } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Social_Media.css";
const Social_Media = () => {
  return (
    <div className="social_media">
      <div className="icon">
        <Link
          to="https://www.linkedin.com/in/omar-ghazi-b41494239/"
          target="_blank"
        >
          <FaLinkedinIn />
        </Link>
      </div>
      <div className="icon">
        <Link to="https://web.facebook.com/omar.ghazi.754918/" target="_blank">
          <CgFacebook />
        </Link>
      </div>
      <div className="icon">
        <Link to="https://www.instagram.com/om7_gh/" target="_blank">
          <FiInstagram />
        </Link>
      </div>
    </div>
  );
};

export default Social_Media;
