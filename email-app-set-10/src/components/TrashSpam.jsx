import React from "react";
import { useMails } from "../context/MailContext";
import { NOT_SPAM, RECOVER_MAIL } from "../constantType/constantType";
import "../Pages/pageStyle.css";

export function TrashSpam({ data: { mail, folderName } }) {
  const { dispatch } = useMails();

  const { mId, subject, content } = mail;

  const handleClick = (e) => {
    const selectedInput = e.target.value;

    switch (selectedInput) {
      case "not-spam":
        dispatch({ type: NOT_SPAM, payload: mId });
        break;
      case "recover":
        dispatch({ type: RECOVER_MAIL, payload: mId });
        break;
      default:
        return;
    }
  };

  return (
    <>
      <div className="trshSpamCard">
        <h1>Subject: {subject}</h1>
        <p>{content}</p>

        <div className="spamtrashbutton" onClick={handleClick}>
          {folderName === "trash" && (
            <button value="recover">Recover Mail</button>
          )}
          {folderName === "spam" && <button value="not-spam">Not Spam</button>}
        </div>
      </div>
    </>
  );
}
