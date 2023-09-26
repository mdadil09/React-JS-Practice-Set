import React from "react";
import "./pageStyle.css";
import { useMails } from "../context/MailContext";
import { TrashSpam } from "../components/TrashSpam";

const Spam = () => {
  const {
    state: { spam },
  } = useMails();
  return (
    <div className="spam-container">
      {spam.map((mail) => {
        const { mId } = mail;

        return (
          <TrashSpam key={mId} data={{ mail: mail, folderName: "spam" }} />
        );
      })}
    </div>
  );
};

export default Spam;
