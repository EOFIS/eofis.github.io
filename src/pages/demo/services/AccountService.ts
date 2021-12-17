import { IRegisterViewModel } from "../types/IRegisterViewModel";
import { IRegistrationResponse } from "../types/IRegistrationResponse";
import { api } from "../../../http-common";
import { AxiosResponse } from "axios";
import { ILoginRequest } from "../types/ILoginRequest";
import { ILoginResponse } from "../types/ILoginResponse";
import { IUser, IUserDocument, User } from "../types/IUser";
import { IUpdateResponse } from "../types/IUpdateResponse";
import IUpdateRequest from "../types/IUpdateRequest";

export class AccountService {
    public static register(viewModel: IRegisterViewModel) : Promise<IRegistrationResponse> {
        return new Promise<IRegistrationResponse>((resolve, reject) => {
            api
            .post("/users", viewModel)
            .then((res : AxiosResponse<any>) => {
                if (res.data.success) {
                    sessionStorage.email = "";
                }
                resolve({ success: res.data.success, errors: res.data.errors});
            })
            .catch(res => {
                resolve({ success: false, errors: res.data.errors});
            })
        })
    }

    public static logout(): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            api
            .delete("/auth")
            .then(res => {
                resolve(true);
            })
            .catch(err => {
                console.log(`Error logging out: ${err}`);
                reject(err);
            });
        });
    }

    public static login(postData: ILoginRequest): Promise<IUser> {
        return new Promise<IUser>((resolve, reject) => {
            console.log(`AccountService.login`);
            api
            .post<ILoginRequest, AxiosResponse<[ILoginResponse, number]>>("/auth", postData)
            .then((res) => {
                console.log(`AccountService.login: RX: ${JSON.stringify(res.data)}`);
                if (res.status === 200) {
                    resolve(User.from_document(res.data[0].user));
                } else {
                    reject({
                        ...res.data,
                        user: null
                    });
                }
            })
            .catch(err => {
                console.error(`Error logging in: ${err}`);
                reject({user: null, errorMessage: err});
            });
        });
    }

    public static updateUserDetails(userData: IUser): Promise<IUpdateResponse<IUser>> {
        return new Promise<IUpdateResponse<IUser>>((resolve, reject) => {
            if (userData._id === undefined || !userData._id)
            {
                reject(`User id is not defined or not valid: ${userData._id}`);
            } else {
                api
                .put<IUpdateRequest<IUser>, AxiosResponse<IUpdateResponse<IUser>>>(`/user/${userData._id}`, userData)
                .then((res) => {
                    if (res.status === 204) {
                        resolve({});
                    } else {
                        reject(res.data);
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