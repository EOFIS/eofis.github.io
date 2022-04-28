import { INote } from "./INote";

export interface INoteResponse {
    success: boolean;
    errors: [];
    notes: Array<INote>;
}