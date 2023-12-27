import React, { useState } from "react";
import "../style.css";
import { Icon } from "@iconify/react";

const Submenu = ({ category, selectedOption, setSelectedOption }) => {
  const [isActive, setIsActive] = useState(false);
  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsActive(false);
  };

  console.log(selectedOption);
  return (
    <div className={`select-menu ${isActive ? "active" : ""}`}>
      <div className="select-btn" onClick={handleToggle}>
        <span className="sBtn-text">
          {selectedOption.charAt(0).toUpperCase() + selectedOption.slice(1)}
        </span>
        <Icon icon="bx:chevron-down" className="icon" />
      </div>

      <ul className="options">
        <li className="option">
          <span
            className="option-text"
            onClick={() => handleOptionClick(category.firstVal)}
          >
            {" "}
            {category.firstVal}
          </span>
        </li>
        {category.category.map((item, id) => (
          <li
            className="option"
            key={id}
            onClick={() => handleOptionClick(item)}
          >
            <span className="option-text">
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Submenu;
