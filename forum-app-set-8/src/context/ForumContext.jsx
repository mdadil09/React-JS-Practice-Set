import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { fakeFetch } from "../api/api";
export const ForumContext = createContext();

export function ForumProvider({ children }) {
  const [showForum, setShowForum] = useState([]);

  useEffect(() => {
    const getForumData = async () => {
      try {
        const res = await fakeFetch("https://example.com/api/questions");
        setShowForum(res.data.questions);
      } catch (error) {
        console.log(error);
      }
    };
    getForumData();
  }, []);
  return (
    <ForumContext.Provider value={{ showForum, setShowForum }}>
      {children}
    </ForumContext.Provider>
  );
}
