import { useState, useCallback, useEffect, useRef } from "react";
import jwtDecode from "jwt-decode";

export const useLogin = () => {
  const time = useRef(Math.floor(Date.now() / 1000));
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(false);
  
  const login = useCallback(
    token => {
      if (token) {
        localStorage.setItem("AUTH_TOKEN", JSON.stringify(token));
      }
      const localData = localStorage.getItem("AUTH_TOKEN");
      if (localData) {
        let decodedToken = jwtDecode(localData);
        if (decodedToken.exp > time.current) {
          setUser(decodedToken.user);
          setIsLoggedIn(true);
        }
      }
    },
    [time]
  );

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUser(false);
  }, []);

  useEffect(() => {
    login();
  }, [login]);

  return {
    user,
    login,
    logout,
    isLoggedIn
  };
};
