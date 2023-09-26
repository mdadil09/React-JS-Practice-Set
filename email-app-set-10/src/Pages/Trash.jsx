import React from "react";
import "./pageStyle.css";
import { useMails } from "../context/MailContext";
import { TrashSpam } from "../components/TrashSpam";

const Trash = () => {
  const {
    state: { trash },
  } = useMails();
  return (
    <div className="trash-container">
      {trash.map((mail) => {
        const { mId } = mail;

        return (
          <TrashSpam key={mId} data={{ mail: mail, folderName: "trash" }} />
        );
      })}
    </div>
  );
};

export default Trash;
