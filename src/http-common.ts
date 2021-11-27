import axios from "axios";

axios.defaults.withCredentials = true;
export const api = axios.create({
    baseURL: 'https://localhost:5000/api/v0',
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: true
});