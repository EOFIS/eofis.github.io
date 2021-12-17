import { ObjectId } from "mongodb";

export interface IUser {
    loggedIn: boolean;
    
    _id?: ObjectId;
    name: string;
    email: string;
    last_login: Date;
    is_activated: boolean;

}

const __LAST_LOGIN_DATE_FORMAT = "%Y-%m-%dT%H:%M:%S%z";

export interface IUserDocument {    
    _id?: ObjectId;
    name: string;
    email: string;
    last_login: string;
    is_activated: boolean;
}

export class User implements IUser {
    loggedIn: boolean;
    _id?: ObjectId;
    name: string;
    email: string;
    last_login: Date;
    is_activated: boolean;

    constructor (name: string, email: string, last_login: Date, is_activated: boolean = false, loggedIn: boolean = false, _id?: ObjectId) {
        console.log(`_ID: ${_id} : ${_id?.id}`);
        this._id = _id;
        this.name = name;
        this.email = email;
        this.last_login = last_login;
        this.is_activated = is_activated;
        this.loggedIn = loggedIn;
    }

    public static from_document(doc: IUserDocument) : User {
        let last_login = new Date(doc.last_login);
        return new User(doc.name, doc.email, last_login, doc.is_activated, false, doc._id);
    }
}