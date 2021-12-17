import { IUserDocument } from "./IUser";

export interface ILoginResponse {
    user: IUserDocument;
    errorMessage?: Array<string>;
}