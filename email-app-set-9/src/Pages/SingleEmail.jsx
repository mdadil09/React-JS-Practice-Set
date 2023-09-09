import React, { useContext } from "react";
import { useParams } from "react-router";
import { EmailContext } from "../context/EmailContext";
import "./styleHome.css";
import { Link } from "react-router-dom";

const SingleEmail = () => {
  const { id } = useParams();
  const { email, sentEmail } = useContext(EmailContext);

  const findEmail = email.find((item) => item.id === parseInt(id, 36));
  const findSentEmail = sentEmail.find((item) => item.id === parseInt(id, 36));

  return (
    <>
      <div className="singleBox">
        <div className="sinleContent">
          {findEmail && (
            <div className="single">
              <p style={{ fontWeight: "600", fontSize: "50px" }}>
                {findEmail.subject}
              </p>
              <p>From: {findEmail.sender}</p>
              <p>Message: {findEmail.message}</p>
            </div>
          )}
          {findSentEmail && (
            <div className="single">
              <p style={{ fontWeight: "600", fontSize: "50px" }}>
                {findSentEmail.subject}
              </p>
              <p>From: {findSentEmail.to}</p>
              <p>Message: {findSentEmail.message}</p>
            </div>
          )}
        </div>
      </div>
      <div className="links">
        <Link
          style={{
            padding: "10px",
            fontSize: "40px",
            textDecoration: "none",
            border: "none",
            marginRight: "10px",
            backgroundColor: "white",
            color: "black",
          }}
          to="/"
        >
          Back To Home
        </Link>
      </div>
    </>
  );
};

export default SingleEmail;
