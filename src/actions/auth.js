import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../types";
import api from "../api";
import jwt from "jsonwebtoken";

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
});

export const userLoggedOut = () => {
  return {
    type: USER_LOGGED_OUT
  };
};

export const login = credentials => dispatch =>
  api.user.login(credentials).then(user => {
    dispatch(userLoggedIn(user));
    localStorage.token = jwt.sign(
      {
        token: user.id
      },
      "secretkey"
    );
  });

export const logout = () => dispatch => {
  localStorage.removeItem("token");
  // localStorage.removeItem("photos");
  dispatch(userLoggedOut());
};
