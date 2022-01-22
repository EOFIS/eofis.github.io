import { IRegistrationRequest } from "../types/IRegistrationRequest";
import { IRegistrationResponse } from "../types/IRegistrationResponse";
import { api } from "../../../api";
import { AxiosResponse } from "axios";
import { ILoginRequest } from "../types/ILoginRequest";
import { ILoginResponse } from "../types/ILoginResponse";
import { IUser, User } from "../types/IUser";
import { IUpdateResponse } from "../types/IUpdateResponse";
import IUpdateRequest from "../types/IUpdateRequest";
import { ClientError, IErrorResponse } from "../types/IErrorResponse";

export class AccountService {
    public static register(request: IRegistrationRequest): Promise<IRegistrationResponse> {
        return new Promise<IRegistrationResponse>((resolve, reject) => {
            api
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
        return new Promise<boolean>((resolve, reject) => {
            api
                .delete("/auth", {withCredentials: false})
                .then(res => {
                    resolve(true);
                })
                .catch(err => {
                    console.error(`Error logging out: ${err}`);
                    reject(err);
                });
        });
    }

    public static login(postData: ILoginRequest): Promise<User> {
        return new Promise<User>((resolve, reject) => {
            api
                .post<ILoginRequest, AxiosResponse<[ILoginResponse, number]>>("/auth", postData, {withCredentials: false})
                .then((res) => {
                    if (res.status === 200) {
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
                        }
                    }
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
                api
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