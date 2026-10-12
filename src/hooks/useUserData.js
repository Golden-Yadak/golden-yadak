import { createContext, useContext } from "react";

export const UserDataContext = createContext(null);

export function useUserData() {
  const context = useContext(UserDataContext);
  if (!context) {
    throw new Error("useUserData must be used within a UserDataProvider");
  }
  return context;
}
