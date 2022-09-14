import { IResponse } from "./IResponse";

export interface IErrorResponse extends IResponse {
    errorMessages?: Array<string>;
    status?: number;
}

export class GenericErrorResponse implements IErrorResponse {
    errorMessages?: Array<string>;
    constructor(errorMessages?: Array<string> | string, public status?: number) {
        if (Array.isArray(errorMessages)) {
            this.errorMessages = errorMessages;
        } else if (errorMessages !== undefined) {
            this.errorMessages = [];
            this.errorMessages.push(errorMessages);
        } else {
            this.errorMessages = undefined;
        }
    }
};

export class ClientError extends GenericErrorResponse {};
export class ServerError extends GenericErrorResponse {};