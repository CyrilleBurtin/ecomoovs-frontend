import { createContext } from "react";

export const AuthContext = createContext({
  isLoggegIn: false,
  login: () => {},
  logout: () => {}
});
