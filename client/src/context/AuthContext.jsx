import { createContext, useContext, useEffect, useReducer } from "react";

const initialState = {
  user:
    localStorage.getItem("user") != undefined
      ? JSON.parse(localStorage.getItem("user"))
      : null,
  token: localStorage.getItem("token") || null,
};

export const authContext = createContext(initialState);
const authReducer = (state, action) => {
 
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
    localStorage.setItem("token", state.token);
    // console.log(state.token);
  }, [state]);

  return (
    <authContext.Provider
      value={{ user: state.user, token: state.token, dispatch }}
    >
      {children}
    </authContext.Provider>
  );
};
