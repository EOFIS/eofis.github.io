import { ObjectId } from "bson";
import { IResponse } from "./IResponse";

export interface ICreateResponse<T> extends IResponse {
    _id: ObjectId;
}