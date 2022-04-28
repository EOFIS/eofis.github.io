import { IRegistrationRequest } from "../types/IRegistrationRequest";
import { IRegistrationResponse } from "../types/IRegistrationResponse";
import { authApi, openApi } from "../api";
import { AxiosResponse } from "axios";
import { ILoginRequest } from "../types/ILoginRequest";
import { ILoginResponse } from "../types/ILoginResponse";
import { IUser, User } from "../types/IUser";
import { IUpdateResponse } from "../types/IUpdateResponse";
import IUpdateRequest from "../types/IUpdateRequest";
import { ClientError, IErrorResponse } from "../types/IErrorResponse";
import { LOCAL_STORAGE } from "../types/Constants";

export class AccountService {
    public static register(request: IRegistrationRequest): Promise<IRegistrationResponse> {
        return new Promise<IRegistrationResponse>((resolve, reject) => {
            openApi
                .post<IRegistrationRequest, AxiosResponse<[IRegistrationResponse, number]>>("/users", request)
                .then((res) => {
                    if (res.status === 201)
                        resolve(res.data[0]);
                    else
                        reject(res.data[0].errorMessages)
                })
                .catch(res => {
                    reject({ ...res });
                })
        })
    }

    public static logout(): Promise<boolean> {
        localStorage.removeItem(LOCAL_STORAGE.JWT);
        return new Promise<boolean>((resolve, reject) => {
            openApi
                .delete<void, AxiosResponse<void,void>>("/auth")
                .then(res => {
                    if (res?.status === 201) {
                        resolve(true);
                    } else {
                        resolve(false);
                    }
                })
                .catch(err => {
                    console.error(`Error logging out: ${JSON.stringify(err)}`);
                    reject(err);
                });
        });
    }

    public static login(postData: ILoginRequest): Promise<User> {
        return new Promise<User>((resolve, reject) => {
            openApi
                .post<ILoginRequest, AxiosResponse<[ILoginResponse, number]>>("/auth", postData, {withCredentials: false})
                .then((res) => {
                    if (res.status === 200) {
                        localStorage.setItem(LOCAL_STORAGE.JWT, res.data[0].access_token);
                        let user = User.from_document(res.data[0].user);
                        user.loggedIn = true;
                        resolve(user);
                    } else {
                        reject(res.data[0].errorMessages);
                    }
                })
                .catch((err: IErrorResponse) => {
                    if (err instanceof ClientError ) {
                        switch (err.status) {
                            case 404: case 403:
                                console.info(`Issue logging in: [${err.status}] "${err.errorMessages}" | ${JSON.stringify(err)}`);
                                reject(err.errorMessages);
                                break;
                        }
                    }
                    console.error(`Issue logging in: `)
                    console.error(err.errorMessages || err);
                    reject(err.errorMessages || err);
                });
        });
    }

    public static updateUserDetails(userData: IUser): Promise<IUpdateResponse<IUser>> {
        return new Promise<IUpdateResponse<IUser>>((resolve, reject) => {
            if (userData._id === undefined || !userData._id) {
                reject(`User id is not defined or not valid: ${userData._id}`);
            } else {
                authApi
                    .put<IUpdateRequest<IUser>, AxiosResponse<IUpdateResponse<IUser>>>(`/user/${userData._id}`, userData)
                    .then((res) => {
                        if (res.status === 204) {
                            resolve({});
                        } else {
                            reject(res.data.errorMessages);
                        }
                    })
                    .catch(err => {
                        console.error(`Error updating user: ${err}`);
                        reject(err);
                    });
            }
        })
    }
}