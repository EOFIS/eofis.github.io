export interface IErrorResponse {
    errorMessages: Array<string>;
    status: number;
}

export class GenericErrorResponse implements IErrorResponse {
    errorMessages: Array<string>;
    constructor(errorMessages: Array<string> | string, public status: number) {
        if (Array.isArray(errorMessages)) {
            this.errorMessages = errorMessages;
        } else {
            this.errorMessages = [];
            this.errorMessages.push(errorMessages);
        }
    }
};

export class ClientError extends GenericErrorResponse {};
export class ServerError extends GenericErrorResponse {};