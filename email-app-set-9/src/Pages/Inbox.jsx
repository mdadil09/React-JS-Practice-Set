import React, { useContext } from "react";
import { EmailContext } from "../context/EmailContext";
import "./styleHome.css";
import { Link } from "react-router-dom";

const Inbox = () => {
  const { email, setEmail } = useContext(EmailContext);

  const filteredRead = email.filter((item) => item.read === true);
  const filteredUnread = email.filter((item) => item.read === false);

  const handleClick = (id) => {
    const doneItem = email.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          read: !item.read,
        };
      } else {
        return item;
      }
    });
    setEmail(doneItem);
  };

  return (
    <div className="emailBox">
      <h3>Inbox</h3>
      <div className="header">
        <p style={{ color: "green" }}>Read: {filteredRead.length}</p>
        <p style={{ color: "red" }}>Unread: {filteredUnread.length}</p>
      </div>
      <div className="emailContent">
        {email.map((item) => (
          <ul>
            <li key={item.id}>
              <div className="send">
                <li>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={`/singlemail/${item.id}`}
                  >
                    {item.sender}
                  </Link>
                </li>
                <button
                  style={{
                    marginLeft: "30px",
                    fontSize: "24px",
                    background: "none",
                    border: "none",
                  }}
                  onClick={() => handleClick(item.id)}
                >
                  {item.read === false ? "Mark as read" : null}
                </button>
              </div>
              <p>{item.subject}</p>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Inbox;
