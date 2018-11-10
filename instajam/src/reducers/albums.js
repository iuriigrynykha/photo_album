import { USER_ALBUMS_FETCHED, GET_USER_ALBUM_ID } from "../types";

const INITIAL_STATE = {
  albums: [],
  id: null
};

export default function albums(state = INITIAL_STATE, action = []) {
  switch (action.type) {
    case USER_ALBUMS_FETCHED:
      return { ...state, albums: action.albums };
    case GET_USER_ALBUM_ID:
      return { ...state, id: action.id };
    default:
      return state;
  }
}
