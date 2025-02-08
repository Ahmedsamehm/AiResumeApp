import useResume from "@/Hooks/useResume";
import React, { createContext, useMemo } from "react";

export const DashBoardContext = createContext();

export default function DashBoardContextProvider({ children }) {
  const {
    addNewCard,
    cards,
    Collections,
    bodyData,
    setDescription,
    setTitle,
    title,
  } = useResume();

  const value = useMemo(() => {
    return {
      addNewCard,
      cards,
      Collections,
      bodyData,
      setDescription,
      setTitle,
      title,
    };
  }, [
    addNewCard,
    cards,
    Collections,
    bodyData,
    setDescription,
    setTitle,
    title,
  ]);

  return (
    <DashBoardContext.Provider value={value}>
      {children}
    </DashBoardContext.Provider>
  );
}
