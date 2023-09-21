import React, { useContext } from "react";
import { useParams } from "react-router";
import { MailContext } from "../context/MailContext";
import "./pageStyle.css";

const ViewDetails = () => {
  const { mId } = useParams();

  return (
    <div className="container">
      <div className="single-item">{mId}</div>
    </div>
  );
};

export default ViewDetails;
