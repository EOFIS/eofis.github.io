import { IUserDocument } from "./IUser";

export interface ILoginResponse {
    user: IUserDocument;
    access_token: string;
    errorMessages?: Array<string>;
}