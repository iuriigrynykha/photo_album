import { USER_PHOTOS_FETCHED, USER_LOGGED_OUT } from "../types";

export default function photos(state = [], action = []) {
  switch (action.type) {
    case USER_PHOTOS_FETCHED:
      return action.photos;
    case USER_LOGGED_OUT:
      return {};
    default:
      return state;
  }
}
