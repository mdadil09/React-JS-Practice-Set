import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { EmailContext } from "../context/EmailContext";
import "./styleHome.css";

const Sent = () => {
  const { sentEmail } = useContext(EmailContext);
  return (
    <div className="emailBox">
      <h3>Sent</h3>
      <div className="emailContent">
        {sentEmail.map((item) => (
          <ul>
            <li key={item.id}>
              <div className="send">
                <li>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={`/singlemail/${item.id}`}
                  >
                    {item.to}
                  </Link>
                </li>
              </div>
              <p>{item.subject}</p>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Sent;
