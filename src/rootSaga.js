import { takeLatest } from "redux-saga/effects";
import { LOG_IN_REQUEST, LOG_OUT_USER } from "./types";
import { createUserSaga, userLogout } from "./sagas/usersSaga";

export default function* rootSaga() {
  yield takeLatest(LOG_IN_REQUEST, createUserSaga);
  yield takeLatest(LOG_OUT_USER, userLogout);
}
