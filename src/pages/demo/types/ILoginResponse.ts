import IUser from "./IUser";

export interface ILoginResponse {
    user: IUser;
    errorMessage?: string;
}