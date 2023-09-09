import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { fakeFetch } from "../api/api";

export const EmailContext = createContext();

export function EmailProvider({ children }) {
  const [email, setEmail] = useState([]);
  const [sentEmail, setSentEmail] = useState([]);

  const getEmail = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/allemails");
      setEmail(res.data.emails);
    } catch (error) {
      console.log(error);
    }
  };

  const getSentEmail = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/allemails");
      setSentEmail(res.data.sentEmails);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEmail();
    getSentEmail();
  }, []);
  return (
    <EmailContext.Provider value={{ email, setEmail, sentEmail, setSentEmail }}>
      {children}
    </EmailContext.Provider>
  );
}
