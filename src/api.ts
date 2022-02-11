import axios, { AxiosError, AxiosResponse } from "axios";
import { createContext } from "react";
import { LOCAL_STORAGE } from "./pages/demo/types/Constants";
import { ClientError, GenericErrorResponse, IErrorResponse, ServerError } from "./pages/demo/types/IErrorResponse";


axios.interceptors.response.use(
    (response) => response,
    (error: AxiosError<IErrorResponse>) => {
        if (error.response) {
            if (error.response.status >= 400 && error.response.status < 500) {
                return Promise.reject(new ClientError(error.response.data.errorMessages, error.response.status));
            }
            if (error.response.status >= 500) {
                return Promise.reject(new ServerError(error.response.data.errorMessages, error.response.status));
            }
            return new GenericErrorResponse(error.response.data.errorMessages, error.response.status);
        }
    }
);

type Dictionary = { [index: string]: string }

const BASE_URLS: Dictionary = {
    'local': 'https://localhost:5000/api/v0',
    'remote-dev' : 'https://eofis-dev.herokuapp.com/api/v0',
    'remote-prod' : 'https://eofis.herokuapp.com/api/v0'
}
const baseURL = process.env.ENV ? BASE_URLS[process.env.ENV] : BASE_URLS['local'];

export const openApi = axios.create({
    baseURL: baseURL,
    // baseURL: 'https://eofis-dev.herokuapp.com/api/v0', // for deployed dev api
    // baseURL: 'https://localhost:5000/api/v0', // for `./serve.sh`
    // baseURL: 'http://localhost:5000/api/v0', // for `heroku local`
    // doesn't work when using "proxy" : "" in package.json
    // baseURL: '/api/v0', // for other proxies
});
export const authApi = axios.create({
    baseURL: baseURL,
});
authApi.interceptors.request.use(
    config => {
        if (config.headers && !config.headers.Authorization) {
            config.headers.Authorization = `Bearer ${localStorage.getItem(LOCAL_STORAGE.JWT)}`;
        }
        return config;
    }, error => Promise.reject(error)
);


export default { authApi, openApi };
