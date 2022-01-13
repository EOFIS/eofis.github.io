import axios, { AxiosError, AxiosResponse } from "axios";
import { ClientError, GenericErrorResponse, IErrorResponse, ServerError } from "./pages/demo/types/IErrorResponse";

axios.defaults.withCredentials = true;
export const api = axios.create({
    baseURL: 'https://localhost:5000/api/v0',
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: true
});

api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<{message: IErrorResponse}>) => {
        // console.debug(JSON.stringify(error));
        // console.debug(JSON.stringify(error.response));
        // console.debug(JSON.stringify(error.response?.data));
        // console.debug(JSON.stringify(error.response?.data.message));
        // console.debug(JSON.stringify(error.response?.data.message.errorMessages));

        if (error.response) {
            if (error.response.status >= 400 && error.response.status < 500) {
                return Promise.reject(new ClientError(error.response.data.message.errorMessages, error.response.status));
            }
            if (error.response.status >= 500) {
                return Promise.reject(new ServerError(error.response.data.message.errorMessages, error.response.status));
            }
            return new GenericErrorResponse(error.response.data.message.errorMessages, error.response.status);
        }
    }
);

export default { api };