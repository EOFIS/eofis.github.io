import { ObjectId } from "bson";
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

export type CardId = string;

export class Card implements ICard {
    id: CardId;
    last_reviewed: string | number | Date;
    source: ISource;
    tags: string[];
    fields: string[];
    last_modified: string;
    recall_model: [number, number, number];

    constructor (id: CardId, last_reviewed: string | number | Date, source: ISource, tags: string[], fields: string[], last_modified: string, recall_model: [number, number, number]) 
    {
        this.id = id;
        this.last_modified = last_modified;
        this.last_reviewed = last_reviewed;
        this.source = source;
        this.tags = tags;
        this.fields = fields;
        this.recall_model = recall_model;
    }
    public static from_document(doc: ICard) : Card {
        return new Card(doc.id, doc.last_reviewed, doc.source, doc.tags, doc.fields, doc.last_modified, doc.recall_model);
    }
    public to_document() : ICard {
        return this;
    }
    public note_id() : ObjectId {
        return new ObjectId(this.id.slice(0,24));
    }
    public note_card_index() : number {
        return Number(this.id.slice(25));
    }
}