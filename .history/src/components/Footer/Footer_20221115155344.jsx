import React from "react";
import "./footer.css";
import landscape from "../assets/landscape.png";
import { SiFacebook } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import {
  TiSocialTwitterCircular,
  TiSocialLinkedinCircular,
} from "react-icons/ti";
import { AiFillYoutube } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <div>
        <img src={landscape} className="image" />
      </div>
      <div className="containe">
        <div className="gbemi-trabaye">
          <div>
            <h2 className="prop">
              <i>PropCrowdy</i>
            </h2>
            <h5>FUNDRAISING</h5>
            <small>
              PropCrowdy is a crowd investment platform that empowers Nigerians
              to make smart investments
            </small>
            <div className="links">
              <ul className="social-link">
                <a className="social-links" href="">
                  <SiFacebook />
                </a>
                <a className="social-links1" href="">
                  <TiSocialTwitterCircular />
                </a>
                <a className="social-links" href="">
                  <BsInstagram />
                </a>
                <a className="social-links2" href="">
                  <TiSocialLinkedinCircular />
                </a>
                <a className="social-links3" href="">
                  <AiFillYoutube />
                </a>
                <a className="social-links" href="">
                  <FaWhatsapp />
                </a>
              </ul>
            </div>
          </div>
          <div>
            <h3>About Us</h3>
            <ul>
              <li>
                <a>
                  <small>Knowledge Base</small>
                </a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
              <li>
                <a>About Us</a>
              </li>
            </ul>
          </div>
          <div>
            <h1>Quick Nav</h1>
            <ul>
              <li>
                <a>Terms and Conditions</a>
              </li>
              <li>
                <a>Privacy Policy</a>
              </li>
              <li>
                <a>Fees and Charges</a>
              </li>
            </ul>
          </div>
          <div>
            <h1>Contact Us</h1>
            <ul>
              <li>
                <a>
                  21 Adeyomo Alakija Street, Victoria Island, Lagos, Nigeria
                </a>
              </li>
              <li>
                <a>+23480107321018</a>
              </li>
              <li>
                <a>info@propcrowdy.com</a>
              </li>
              <div className="button-section">
                <input placeholder="example@example.com" />
                <button>Join</button>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
