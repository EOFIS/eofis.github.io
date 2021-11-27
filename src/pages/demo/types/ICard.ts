import { ISource } from "./ISource";

export interface ICard {
    id: string;
    last_reviewed: string | number | Date;
    source: ISource;
    tags: string[];
    fields: Array<string>,
    last_modified: string,
    recall_model: [number, number, number]
}