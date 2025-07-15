import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider(props) {
  const initialAuthUser = localStorage.getItem("Users");
  const [authUser, setAuthUser] = useState(() => {
    if (initialAuthUser && initialAuthUser !== "undefined") {
      try {
        return JSON.parse(initialAuthUser);
      } catch (error) {
        console.error("Failed to parse auth user from localStorage", error);
        return undefined;
      }
    } 
    return undefined;
  });
  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {props.children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
