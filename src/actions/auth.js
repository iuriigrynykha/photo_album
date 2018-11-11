import { USER_LOGGED_IN, USER_LOGGED_OUT, LOG_IN_REQUEST } from "../types";

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
});

export const userLoggedOut = () => {
  return {
    type: USER_LOGGED_OUT
  };
};

export const loginRequest = user => ({
  type: LOG_IN_REQUEST,
  user
});

export const logout = () => dispatch => {
  localStorage.removeItem("token");
  dispatch(userLoggedOut());
};
