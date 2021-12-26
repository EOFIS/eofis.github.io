import { IUserDocument } from "./IUser";

export interface ILoginResponse {
    user: IUserDocument;
    errorMessages?: Array<string>;
}