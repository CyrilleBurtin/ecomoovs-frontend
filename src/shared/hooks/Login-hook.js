import { useState, useCallback, useEffect, useRef } from "react";
import jwtDecode from "jwt-decode";

export const useLogin = () => {
  const time = useRef(Math.floor(Date.now() / 1000));
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(false);

  const logout = useCallback(() => {
    localStorage.removeItem("AUTH_TOKEN");
    setIsLoggedIn(false);
    setUser(false);
  }, []);

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
        } else if (decodedToken.exp > time.current){
          logout()
        }
      }
    },
    [time, logout]
  );



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
