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
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        token: null,
      };

    case "LOGIN_SUCCESS":
      // console.log("login success", action.payload.token);
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

  // localStorage.setItem("user", JSON.stringify(state.user));
  // localStorage.setItem("token", state.token);
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
