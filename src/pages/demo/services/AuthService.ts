import { IRegisterViewModel } from "../types/IRegisterViewModel";
import { IRegistrationResponse } from "../types/IRegistrationResponse";
import { api } from "../../../http-common";
import { resolve } from "dns";
import { AxiosResponse } from "axios";
import { ILoginViewModel } from "../types/ILoginViewModel";

export class AuthService {
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

    public static login(postData: ILoginViewModel): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            api
            .post("/auth", postData)
            .then((res : AxiosResponse<any>) => {
                if (res.status === 200) {
                    resolve(res.data);
                } else {
                    reject(res);
                }
            })
            .catch(err => {
                console.error(`Error logging in: ${err}`);
                reject(err);
            });
        });
    }
}