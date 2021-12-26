import { ILoginRequest } from "./ILoginRequest";
import { IUser } from "./IUser";

export interface IAuthContext {
    user?: IUser;
    signin: (loginRequest: ILoginRequest, signedIn: () => void, error: (messages: Array<string>) => void) => void;
    signout: (signedOut: () => void, error: (messages: Array<string>) => void) => void;
}