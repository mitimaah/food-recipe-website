import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="box">
      <div className="container">
        <div className="row">
          <div className="column">
            <p className="heading">About Us</p>
            <a className="footer-link" href="#">
              Aim
            </a>
            <a className="footer-link" href="#">
              Vision
            </a>
            <a className="footer-link" href="#">
              Testimonials
            </a>
          </div>
          <div className="column">
            <p className="heading">Services</p>
            <a className="footer-link" href="#">
              Your account
            </a>
            <a className="footer-link" href="#">
              Add new recipie
            </a>
            <a className="footer-link" href="#">
              Find more
            </a>
          </div>
          <div className="column">
            <p className="heading">Contact Us</p>
            <a className="footer-link" href="#">
              Warsaw
            </a>
            <a className="footer-link" href="#">
              London
            </a>
            <a className="footer-link" href="#">
              Berlin
            </a>
            <a className="footer-link" href="#">
              New York
            </a>
          </div>
          <div className="column">
            <p className="heading">Social Media</p>
            <a className="footer-link" href="#">
              <span style={{ marginLeft: "10px" }}>Facebook</span>
            </a>
            <a className="footer-link" href="#">
              <span style={{ marginLeft: "10px" }}>Instagram</span>
            </a>
            <a className="footer-link" href="#">
              <span style={{ marginLeft: "10px" }}>Twitter</span>
            </a>
            <a className="footer-link" href="#">
              <span style={{ marginLeft: "10px" }}>Youtube</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
