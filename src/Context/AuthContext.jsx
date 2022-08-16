import { React, createContext, useState, useEffect, useMemo } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [auth, setAuth] = useState([]);

  useMemo(() => {
    const strg = window.localStorage.getItem("user");
    if (strg) {
      return setAuth(JSON.parse(strg));
    }
    return setAuth(null);
  }, []);

  return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
