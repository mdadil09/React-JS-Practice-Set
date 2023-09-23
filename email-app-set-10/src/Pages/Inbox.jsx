import React, { useContext, useState } from "react";
import "./pageStyle.css";
import { MailContext } from "../context/MailContext";
import { Link } from "react-router-dom";
import { CATEGORY } from "../constantType/constantType";
import MailCard from "../components/MailCard";

const Inbox = () => {
  const { filteredItems, dispatch } = useContext(MailContext);

  const unreadMail = filteredItems.filter((item) => item.unread);

  const handleChange = (e) => {
    const selectedInput = e.target.value;

    dispatch({ type: CATEGORY, payload: selectedInput });
  };

  console.log(CATEGORY);
  return (
    <div className="container">
      <div className="headers">
        <div className="header-text">
          <h1>Md Adil Mail Box</h1>
        </div>
        <div className="dropdown">
          <label htmlFor="show-unread-checkbox">
            <input
              id="show-unread-checkbox"
              type="checkbox"
              value="show-unread"
              onChange={handleChange}
            />
            Show unread emails
          </label>

          <label htmlFor="show-starred-checkbox">
            <input
              id="show-starred-checkbox"
              type="checkbox"
              value="show-starred"
              onChange={handleChange}
            />
            Show starred emails
          </label>
        </div>
      </div>
      <div className="inbox">
        <h3>Unread: {unreadMail.length}</h3>
        <div className="inbox-item">
          {filteredItems.map((mail) => {
            const { mId } = mail;
            return <MailCard key={mId} mail={mail} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Inbox;
