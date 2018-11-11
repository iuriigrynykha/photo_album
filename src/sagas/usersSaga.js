import { call, put } from "redux-saga/effects";
import { userLoggedIn, userLoggedOut } from "../actions/auth";
import api from "../api";
import jwt from "jsonwebtoken";

export function* createUserSaga(action) {
  const user = yield call(api.user.login, action.user);
  localStorage.token = jwt.sign(
    {
      token: user.id
    },
    "secretkey"
  );
  yield put(userLoggedIn(user));
}
export function* userLogout(action) {
  yield put(userLoggedOut);
}
