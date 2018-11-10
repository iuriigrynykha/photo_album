import axios from "axios";

export default {
  user: {
    login: credentials =>
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${credentials}`)
        .then(res => res.data)
  },
  albums: {
    albumsAPI: userCredentials =>
      axios
        .get(
          `https://jsonplaceholder.typicode.com/users/${userCredentials}/albums`
        )
        .then(res => res.data)
  },
  photos: {
    photosAPI: albumsId =>
      axios
        .all(
          albumsId.map(id =>
            axios.get(
              `https://jsonplaceholder.typicode.com/photos?albumId=${id}`
            )
          )
        )
        .then(res => res.map(res => res.data))
  }
};
