import { createContext, useContext, useEffect, useReducer } from "react";

const initialState = {
  user:
    localStorage.getItem("user") != undefined
      ? JSON.parse(localStorage.getItem("user"))
      : null,
  token: localStorage.getItem("user") || null,
};

export const authContext = createContext(initialState);
const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        token: null,
      };

    case "LOGIN_SUCCESS":
      return {
        user: action.payload.user,
        token: action.payload.token,
      };
    case "LOGOUT":
      return {
        user: null,
        token: null,
      };

    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
    localStorage.setItem("token", JSON.stringify(state.token));
  }, [state]);

  return (
    <authContext.Provider
      value={{ user: state.user, token: state.token, dispatch }}
    >
      {children}
    </authContext.Provider>
  );
};
