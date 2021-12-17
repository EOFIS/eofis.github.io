import { ObjectId } from "mongodb";

export default interface IUser {
    loggedIn: boolean;
    
    _id?: ObjectId;
    name: string;
    email: string;
    last_login: string;
    is_activated: boolean;

}