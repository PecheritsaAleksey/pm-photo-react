import axios from "axios";

const instance = axios.create({
    baseURL: "https://mariapokareva-92d0f.firebaseio.com/",
});

export default instance;
