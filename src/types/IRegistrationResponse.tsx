import { ObjectId } from "bson";

export interface IRegistrationResponse {
    id: ObjectId;
    emailVerificationSent: boolean;
    errorMessages?: [];
}