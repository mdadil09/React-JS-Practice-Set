import React from "react";
import { useMails } from "../context/MailContext";
import { CATEGORY } from "../constantType/constantType";
export function InboxHeader() {
  const { dispatch } = useMails();

  const handleChange = (e) => {
    const selectedInput = e.target.value;
    dispatch({ type: CATEGORY, payload: selectedInput });
  };
  return (
    <div className="headers">
      <div className="header-text">
        <h1>Md Adil Mail Box</h1>
      </div>
      <div className="dropdown">
        <label htmlFor="show-unread-checkbox">
          <input
            id="show-unread-checkbox"
            type="checkbox"
            value="show-unread"
            onChange={handleChange}
            style={{ marginRight: "10px" }}
          />
          Show unread emails
        </label>

        <label htmlFor="show-starred-checkbox">
          <input
            id="show-starred-checkbox"
            type="checkbox"
            value="show-starred"
            onChange={handleChange}
          />
          Show starred emails
        </label>
      </div>
    </div>
  );
}
