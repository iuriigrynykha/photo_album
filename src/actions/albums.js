import {
  USER_ALBUMS_FETCHED,
  GET_USER_ALBUM_ID,
  USER_PHOTOS_FETCHED
} from "../types";
import api from "../api";

export const fetchedAlbums = albums => ({
  type: USER_ALBUMS_FETCHED,
  albums
});

export const fetchedPhotos = photos => {
  return {
    type: USER_PHOTOS_FETCHED,
    photos
  };
};

export const setClickedAlbumId = id => ({
  type: GET_USER_ALBUM_ID,
  id
});

export const albumsAPI = userCredentials => dispatch =>
  api.albums.albumsAPI(userCredentials).then(albums => {
    const albumsId = albums.map(album => album.id);
    api.photos
      .photosAPI(albumsId)
      .then(photos => dispatch(fetchedPhotos(photos)));
    dispatch(fetchedAlbums(albums));
  });

export const getClickedAlbumId = id => dispatch =>
  dispatch(setClickedAlbumId(id));
