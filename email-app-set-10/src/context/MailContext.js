import React, { useReducer } from "react";
import { createContext } from "react";
import { mails } from "../api/api";
export const MailContext = createContext();

const initialState = {
  mails: mails, // Initialize with your data from the API
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Inbox":
      return { ...state };
    case "Unread":
      return {
        ...state,
        mails: state.mails.filter((mail) => mail.unread === true),
      };

    case "Starred":
      return {
        ...state,
        mails: state.mails.filter((mail) => mail.isStarred === true),
      };

    default:
      return state;
  }
};

export function MailProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleUnread = (mail) => {
    dispatch({ type: "Unread", payload: { mail } });
  };

  const handleStarred = (mail) => {
    dispatch({ type: "Starred", payload: { mail } });
  };

  return (
    <MailContext.Provider
      value={{ state, dispatch, handleUnread, handleStarred }}
    >
      {children}
    </MailContext.Provider>
  );
}
