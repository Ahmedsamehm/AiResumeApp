import useCreateCollectionRef from "@/Hooks/useCreateCollectionRef";
import React, { createContext, useMemo } from "react";

export const CreateDocContext = createContext();

export default function CreateDocContextProvider({ children }) {
  const { addDocument, data, getData } = useCreateCollectionRef();

  const values = useMemo(() => {
    return {
      addDocument,
      data,
      getData,
    };
  }, [addDocument, data, getData]);
  return (
    <CreateDocContext.Provider value={values}>
      {children}
    </CreateDocContext.Provider>
  );
}
