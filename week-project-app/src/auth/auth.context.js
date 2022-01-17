import { createContext, ReactNode, useContext, useState } from "react";
import { initializeFirebase } from "../lib/firebase/firebase.config";

const ContentContext = createContext({});
export const useAuthContent = () => useContext(ContentContext);

export const ContextProvider = ({ children }) => {
   initializeFirebase;
   
   return (
      <ContentContext.Provider value={{ authenticated: true }}>
         {children}
      </ContentContext.Provider>
   );
};
