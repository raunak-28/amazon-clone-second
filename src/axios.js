import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-fc0d5.cloudfunctions.net/api", // cloud function url
});

export default instance;
// baseURL: "http://127.0.0.1:5001/clone-fc0d5/us-central1/api", // the api url (cloud function url)
