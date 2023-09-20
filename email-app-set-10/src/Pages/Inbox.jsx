import React, { useContext, useState } from "react";
import "./pageStyle.css";
import { MailContext } from "../context/MailContext";
import { Link } from "react-router-dom";

const Inbox = () => {
  const { state, handleUnread, handleStarred } = useContext(MailContext);
  const [checked, setChecked] = useState(false);

  const size = state.mails.filter((item) => item.unread === true);

  const handleChange = () => {
    setChecked(!checked);
    handleUnread(state);
  };
  const handleChangeOne = () => {
    setChecked(!checked);
    handleStarred(state);
  };
  return (
    <div className="container">
      <div className="headers">
        <div className="header-text">
          <h1>Md Adil Mail Box</h1>
        </div>
        <div className="dropdown">
          <button>
            <input type="checkbox" onChange={handleChange} checked={checked} />{" "}
            Show Unread Mails
          </button>
          <button>
            <input type="checkbox" onChange={handleChangeOne} /> Show Starred
            Mails
          </button>
        </div>
      </div>
      <div className="inbox">
        <h3>Unread: {size.length}</h3>
        <div className="inbox-item">
          {checked === true
            ? state.mails.map((item) => (
                <div className="card" key={item.mId}>
                  <h2>Subject: {item.subject}</h2>
                  <p>{item.content}</p>

                  <div className="buttons">
                    <button>
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to="/"
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
              ))
            : state.mails.map((item) => (
                <div className="card" key={item.mId}>
                  <h2>Subject: {item.subject}</h2>
                  <p>{item.content}</p>

                  <div className="buttons">
                    <button>
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to="/"
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
