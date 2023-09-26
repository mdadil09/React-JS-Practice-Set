import React from "react";
import {
  DELETE_MAIL,
  MARK_AS_READ,
  MARK_AS_UNREAD,
  REPORT_SPAM,
  STARRED,
  UNSTARRED,
} from "../constantType/constantType";
import { useMails } from "../context/MailContext";

function SingleCard({ mail, spam, trash }) {
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
    <>
      <div className="single-item">
        <div
          className="single-card"
          style={{
            backgroundColor: unread === false ? "#B2FFFF" : "",
          }}
          key={mId}
        >
          <div className="sub-header">
            <h2>Subject: {subject}</h2>
            {!trash && !spam && (
              <button
                value={isStarred ? "unstar" : "star"}
                onClick={handleStarClick}
              >
                {isStarred ? "⭐" : "☆"}
              </button>
            )}
          </div>
          <p>{content}</p>
          {!trash && !spam && (
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
          )}
        </div>
      </div>
    </>
  );
}

export default SingleCard;
