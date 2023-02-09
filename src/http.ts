import axios from "axios";

const http = axios.create({
    baseURL: 'http://112.74.99.5:3000/web/api'
});

export default http