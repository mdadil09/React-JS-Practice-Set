import React from "react";
import { useParams } from "react-router";
import "./pageStyle.css";
import { useMails } from "../context/MailContext";
import SingleCard from "../components/SingleCard";

const ViewDetails = () => {
  const { id } = useParams();
  const {
    state: { mails, trash, spam },
  } = useMails();

  const singleItems = mails.find(({ mId }) => mId === id);
  const emailFoundInTrash = trash.find(({ mId }) => mId === singleItems.mId);

  const emailFoundInSpam = spam.find(({ mId }) => mId === singleItems.mId);

  return (
    <div className="single-container">
      <SingleCard
        mail={singleItems}
        trash={emailFoundInTrash ? true : false}
        spam={emailFoundInSpam ? true : false}
      />
    </div>
  );
};

export default ViewDetails;
