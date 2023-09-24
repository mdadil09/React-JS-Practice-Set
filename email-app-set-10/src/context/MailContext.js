import React, { useContext, useReducer } from "react";
import { createContext } from "react";
import { mails } from "../api/api";
import {
  CATEGORY,
  DELETE_MAIL,
  MARK_AS_READ,
  MARK_AS_UNREAD,
  NOT_SPAM,
  RECOVER_MAIL,
  REPORT_SPAM,
  STARRED,
  UNSTARRED,
} from "../constantType/constantType";
export const MailContext = createContext();

const reducer = (state, action) => {
  switch (action.types) {
    case DELETE_MAIL: {
      const mailID = action.payload;
      const deletedMail = state.mails.find(({ mId }) => mId === mailID);
      const newTrash = [...state.trash, deletedMail];
      const newUpdatedMail = state.updatedMails.filter(
        ({ mId }) => mId !== mailID
      );

      return { ...state, trash: newTrash, updatedMails: newUpdatedMail };
    }

    case RECOVER_MAIL: {
      const mailID = action.payload;
      const newTrash = state.trash.filter(({ mId }) => mId !== mailID);
      const trashMailID = newTrash.map(({ mId }) => mId);
      const newUpdatedMail = state.mails.filter(({ mId }) =>
        trashMailID.includes(mId)
      );
      return { ...state, trash: newTrash, updatedMails: newUpdatedMail };
    }

    case REPORT_SPAM: {
      const mailId = action.payload;
      const spammedMail = state.mails.find(({ mId }) => mId === mailId);
      const newSpammedMail = [...state.spam, spammedMail];
      const newUpdatedMail = state.updatedMails.filter(
        ({ mId }) => mId !== mailId
      );

      return { ...state, spam: newSpammedMail, updatedMails: newUpdatedMail };
    }

    case NOT_SPAM: {
      const mailId = action.payload;
      const newSpam = state.spam.filter(({ mId }) => mId !== mailId);
      const spamMailId = newSpam.map(({ mId }) => mId);
      const newUpdatedMail = state.mails.filter(({ mId }) =>
        spamMailId.includes(mId)
      );

      return { ...state, spam: newSpam, updatedMails: newUpdatedMail };
    }

    case MARK_AS_READ: {
      const mailId = action.payload;
      const newUpdatedMail = [...state.updatedMails];
      const selectedMail = newUpdatedMail.find(({ mId }) => mId === mailId);
      selectedMail.unread = false;
      return { ...state, updatedMails: newUpdatedMail };
    }

    case MARK_AS_UNREAD: {
      const mailId = action.payload;
      const newUpdatedMail = [...state.updatedMails];
      const selectedMail = newUpdatedMail.find(({ mId }) => mId === mailId);
      selectedMail.unread = true;
      return { ...state, updatedMails: newUpdatedMail };
    }

    case STARRED: {
      const mailId = action.payload;
      const newUpdatedMail = [...state.updatedMails];
      const selectedMail = newUpdatedMail.find(({ mId }) => mId === mailId);
      selectedMail.isStarred = true;
      return { ...state, updatedMails: newUpdatedMail };
    }

    case UNSTARRED: {
      const mailId = action.payload;
      const newUpdatedMail = [...state.updatedMails];
      const selectedMail = newUpdatedMail.find(({ mId }) => mId === mailId);
      selectedMail.isStarred = false;
      return { ...state, updatedMails: newUpdatedMail };
    }

    case CATEGORY: {
      const selctedFilter = action.payload;
      let newCategory = [...state.selectedCategory];
      if (!newCategory.includes(selctedFilter)) {
        newCategory.push(selctedFilter);
      } else {
        newCategory = newCategory.filter((item) => item !== selctedFilter);
      }
      return { ...state, selectedCategory: newCategory };
    }

    default:
      return { ...state };
  }
};

export function MailProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    mails: mails,
    updatedMails: [...mails],
    selectedCategory: [],
    spam: [],
    trash: [],
  });

  // console.log(state.selectedCategory);

  const applyFilters = (mails) => {
    let newData = [...mails];

    if (state.selectedCategory.length > 0) {
      if (
        state.selectedCategory.includes("show-unread") &&
        state.selectedCategory.includes("show-starred")
      ) {
        newData = newData.filter(
          ({ unread, isStarred }) => unread || isStarred
        );
      } else {
        newData = state.selectedCategory.includes("show-unread")
          ? newData.filter(({ unread }) => unread)
          : newData.filter(({ isStarred }) => isStarred);
      }
    }

    return newData;
  };

  const filteredItems = applyFilters(state.updatedMails);

  return (
    <MailContext.Provider value={{ state, dispatch, filteredItems }}>
      {children}
    </MailContext.Provider>
  );
}

export const useMails = () => useContext(MailContext);
