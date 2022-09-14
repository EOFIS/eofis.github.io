import axios, { AxiosError } from "axios";
import { LOCAL_STORAGE } from "./types/Constants";
import { ClientError, GenericErrorResponse, IErrorResponse, ServerError } from "./types/IErrorResponse";


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

const baseURL = process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : BASE_URLS['local'];

export const openApi = axios.create({ baseURL: baseURL });
export const authApi = axios.create({ baseURL: baseURL });

authApi.interceptors.request.use(
    config => {
        if (config.headers && !config.headers.Authorization) {
            config.headers.Authorization = `Bearer ${localStorage.getItem(LOCAL_STORAGE.JWT)}`;
        }
        return config;
    }, error => Promise.reject(error)
);


export default { authApi, openApi };
