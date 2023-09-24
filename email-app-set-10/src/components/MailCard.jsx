import React from "react";
import { useMails } from "../context/MailContext";
import { Link } from "react-router-dom";
import "../Pages/pageStyle.css";

export function MailCard({ mail, disable, spam, trash }) {
  const { dispatch } = useMails();

  const { mId, unread, isStarred, subject, content } = mail;

  return (
    <div className="card" key={mId}>
      <h2>Subject: {subject}</h2>
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
        <div className="button-end">
          <button style={{ color: "red" }}>Delete</button>
          <button style={{ color: "#FEBE10" }}>Mark as read</button>
          <button style={{ color: "green" }}>Report Spam</button>
        </div>
      </div>
    </div>
  );
}
