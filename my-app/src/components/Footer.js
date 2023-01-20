import "./FooterStyles.css";

import React from "react";

import {
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <h4>
              <FaHome
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </h4>
            <div>
              <p>Rekha Sadan Near Shivam Gas Agency,</p>
              <p>Pratapgarh (230001),</p>
              <p>Uttar Pradesh</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +91 899970139
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              info@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>Follow me!</h4>
          <div className="social">
            <FaLinkedin className="FA"
              size={35}
              style={{ color: "#fff", marginRight: "1rem"}}
            />
            <FaInstagram className="FA"
              size={35}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaTwitter  className="FA"
              size={35}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaGithub className="FA"
              size={35}
              style={{ color: "#fff", marginRight: "1rem"}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
