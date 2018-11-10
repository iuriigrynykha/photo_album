import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

import user from "./reducers/user";
import albums from "./reducers/albums";
import photos from "./reducers/photos";
// import rootReducer from "./rootReducer";
// import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export default createStore(
  combineReducers({
    user,
    albums,
    photos
  }),
  applyMiddleware(thunk, sagaMiddleware)
);

// sagaMiddleware.run(rootSaga);
