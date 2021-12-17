import { ILoginRequest } from "./ILoginRequest";
import IUser from "./IUser";

export interface IAuthContext {
    user?: IUser;
    signin: (loginRequest: ILoginRequest, signedIn: () => void) => void;
    signout: (signedOut: () => void) => void;
}