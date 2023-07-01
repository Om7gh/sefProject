import React from "react";
import banner from "../../Asset/contact.jpg";
import "./Contact.css";
const Contact = () => {
  return (
    <div id="contact" className="contact_page">
      <div className="boxin">
        <form action="">
          <h2>Get in Touch</h2>
          <div className="input">
            <label htmlFor="username">Full Name</label>
            <input type="text" name="username" placeholder="..." />
          </div>
          <div className="input">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="..." />
          </div>
          <div className="input">
            <label htmlFor="Subject">Message</label>
            <textarea
              type="text"
              name="Subject"
              placeholder="..."
              rows={3}
              cols={16}
            />
          </div>
        </form>
        <div className="image">
          <img src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
