import React, { useState } from "react";
import { Link } from "react-router-dom";

const Submenu = () => {
  const [isActive, setIsActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleToggleMenu = () => {
    setIsActive(!isActive);
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setIsActive(false);
  };
  return (
    <>
      <div className="select-menu">
        <div className="select-btn">
          <span className="sBtn-text">Select your option</span>
          <i className="bx bx-chevron-down" />
        </div>
        <ul className="options">
          <li className="option">
            <i className="bx bxl-github" style={{ color: "#171515" }} />
            <span className="option-text">Github</span>
          </li>
          <li className="option">
            <i className="bx bxl-instagram-alt" style={{ color: "#E1306C" }} />
            <span className="option-text">Instagram</span>
          </li>
          <li className="option">
            <i
              className="bx bxl-linkedin-square"
              style={{ color: "#0E76A8" }}
            />
            <span className="option-text">Linkedin</span>
          </li>
          <li className="option">
            <i
              className="bx bxl-facebook-circle"
              style={{ color: "#4267B2" }}
            />
            <span className="option-text">Facebook</span>
          </li>
          <li className="option">
            <i className="bx bxl-twitter" style={{ color: "#1DA1F2" }} />
            <span className="option-text">Twitter</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Submenu;
