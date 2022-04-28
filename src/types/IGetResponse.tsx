import { IErrorResponse } from "./IErrorResponse";

export type IGetResponse<T> = IErrorResponse & T;