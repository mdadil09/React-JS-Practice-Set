import React from "react";
import "./pageStyle.css";
import { useMails } from "../context/MailContext";
import { MailCard } from "../components/MailCard";
import { InboxHeader } from "../components/InboxHeader";

const Inbox = () => {
  const { filteredItems } = useMails();

  const unreadMail = filteredItems.filter((item) => item.unread);

  return (
    <div className="container">
      <InboxHeader />
      <div className="inbox">
        <h3>Unread: {unreadMail.length}</h3>
        <div className="inbox-item">
          {filteredItems.map((mail) => {
            const { mId } = mail;
            return <MailCard key={mId} mail={mail} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Inbox;
