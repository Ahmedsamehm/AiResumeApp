import useAuth from "@/Hooks/useAuth";
import useCreateCollectionRef from "@/Hooks/useCreateCollectionRef";

import React, { createContext, useMemo } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const {
    user,
    error,
    handleLogin,
    handleRegister,
    handleGoogleLogin,
    userId,
    logoutUser,
  } = useAuth();

  const value = useMemo(() => {
    return {
      user,
      error,
      handleLogin,
      handleRegister,
      handleGoogleLogin,
      userId,
      logoutUser,
    };
  }, [user, error, handleGoogleLogin, userId, logoutUser]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
