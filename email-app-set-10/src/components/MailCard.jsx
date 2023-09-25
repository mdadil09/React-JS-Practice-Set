import React from "react";
import { useMails } from "../context/MailContext";
import { Link } from "react-router-dom";
import "../Pages/pageStyle.css";
import {
  DELETE_MAIL,
  MARK_AS_READ,
  MARK_AS_UNREAD,
  REPORT_SPAM,
  STARRED,
  UNSTARRED,
} from "../constantType/constantType";

export function MailCard({ mail, disable, spam, trash }) {
  const { dispatch } = useMails();

  const { mId, unread, isStarred, subject, content } = mail;

  const handleClick = (e) => {
    const selectedInput = e.target.value;

    switch (selectedInput) {
      case "delete":
        dispatch({ type: DELETE_MAIL, payload: mId });
        break;

      case "markasread":
        dispatch({ type: MARK_AS_READ, payload: mId });
        break;

      case "markasunread":
        dispatch({ type: MARK_AS_UNREAD, payload: mId });
        break;

      case "reportspam":
        dispatch({ type: REPORT_SPAM, payload: mId });
        break;

      default:
        return;
    }
  };

  const handleStarClick = (e) => {
    const selectedInput = e.target.value;

    switch (selectedInput) {
      case "star":
        dispatch({ type: STARRED, payload: mId });
        break;
      case "unstar":
        dispatch({ type: UNSTARRED, payload: mId });
        break;
      default:
        return;
    }
  };

  return (
    <div
      className="card"
      key={mId}
      style={{ backgroundColor: unread === false ? "#B2FFFF" : "" }}
    >
      <div className="mail-header">
        <div className="mail-header-text">
          <h2>Subject: {subject}</h2>
        </div>
        <div className="mail-header-img">
          <button
            value={isStarred ? "unstar" : "star"}
            onClick={handleStarClick}
          >
            {isStarred === false ? "Star" : "Unstar"}
          </button>
        </div>
      </div>
      <p>{content}</p>

      <div className="buttons">
        <button>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={`/viewdetail/${mId}`}
          >
            View Details
          </Link>
        </button>
        <div className="button-end" onClick={handleClick}>
          <button value="delete" style={{ color: "red" }}>
            Delete
          </button>
          <button
            value={unread ? "markasread" : "markasunread"}
            style={{ color: "#FEBE10" }}
          >
            {unread ? "Mark As Read" : "Mark As Unread"}
          </button>
          <button value="reportspam" style={{ color: "green" }}>
            Report Spam
          </button>
        </div>
      </div>
    </div>
  );
}
