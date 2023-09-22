import React, { useContext, useState } from "react";
import "./pageStyle.css";
import { MailContext } from "../context/MailContext";
import { Link } from "react-router-dom";

const Inbox = () => {
  const { state } = useContext(MailContext);
  return (
    <div className="container">
      <div className="headers">
        <div className="header-text">
          <h1>Md Adil Mail Box</h1>
        </div>
        <div className="dropdown">
          <button>
            <input type="checkbox" /> Show Unread Mails
          </button>
          <button>
            <input type="checkbox" /> Show Starred Mails
          </button>
        </div>
      </div>
      <div className="inbox">
        <h3>Unread: </h3>
        <div className="inbox-item">
          {state.mails.map((item) => (
            <div className="card" key={item.mId}>
              <h2>Subject: {item.subject}</h2>
              <p>{item.content}</p>

              <div className="buttons">
                <button>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={`/viewdetail/${item.mId}`}
                  >
                    View Details
                  </Link>
                </button>
                <div className="button-end">
                  <button style={{ color: "red" }}>Delete</button>
                  <button style={{ color: "#FEBE10" }}>Mark as read</button>
                  <button style={{ color: "green" }}>Report Spam</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inbox;
