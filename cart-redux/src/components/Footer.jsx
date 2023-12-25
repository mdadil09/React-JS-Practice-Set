import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            Redux Store
            <span>
              <img
                style={{ height: "20vh" }}
                src="../../assets/Images/logp.png"
                alt=""
              />
            </span>
          </h3>
          <p className="footer-links">
            <a href="#" className="link-1">
              Home
            </a>
            <a href="#">Seller</a>
            <a href="#">Pricing</a>
            <a href="#">About</a>
            <a href="#">pages</a>
            <a href="#">Contact</a>
          </p>
          <p className="footer-company-name">Sell Cart Pvt Ltd © 2015</p>
        </div>
        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker" />
            <p>
              <span>444 S. Cedros Ave</span> Solana Beach, California
            </p>
          </div>
          <div>
            <i className="fa fa-phone" />
            <p>+1.555.555.5555</p>
          </div>
          <div>
            <i className="fa fa-envelope" />
            <p>
              <a href="mailto:support@company.com">support@company.com</a>
            </p>
          </div>
        </div>
        <div className="footer-right">
          <p style={{ color: "black" }} className="footer-company-about">
            <span>About the company</span>
            E-commerce (electronic commerce) is the buying and selling of goods
            and services, or the transmitting of funds or data, over an
            electronic network, primarily the internet.
          </p>
          <div className="footer-icons">
            <a href="#">
              <i className="fa fa-facebook" />
            </a>
            <a href="#">
              <i className="fa fa-twitter" />
            </a>
            <a href="#">
              <i className="fa fa-linkedin" />
            </a>
            <a href="#">
              <i className="fa fa-instagram" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
