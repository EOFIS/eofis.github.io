import { ObjectId } from "bson";
import { ISource } from "./ISource";
import ebisu from "ebisu-js";

export interface ICard {
    id: string;
    last_practiced: string | number | Date;
    source: ISource;
    tags: string[];
    fields: Array<string>,
    last_modified: string,
    recall_model: [number, number, number]
}

export type CardId = string;

export class Card implements ICard {
    id: CardId;

    last_practiced: string | number | Date;
    source: ISource;
    tags: string[];
    fields: string[];

    last_modified: string;
    // public get last_modified(): string { return this._last_modified }
    // public set last_modified(d: string | Date | undefined) {
    //     if (typeof (d) === 'string')
    //         this._last_modified = d;
    //     else if (d == undefined)
    //         this._last_modified = new Date().toISOString();
    //     else if (d instanceof Date)
    //         this._last_modified = d.toISOString();
    //     else
    //         throw `Not a valid timestamp for Card.last_modified: ${d}`;
    // }
    recall_model: [number, number, number];

    constructor(id: CardId, last_practiced: string | number | Date, source: ISource, tags: string[], fields: string[], last_modified: string, recall_model: [number, number, number]) {
        this.id = id;
        this.last_modified = last_modified;
        this.last_practiced = last_practiced || '';
        this.source = source;
        this.tags = tags;
        this.fields = fields;
        this.recall_model = recall_model;
    }
    public static from_document(doc: ICard): Card {
        return new Card(doc.id, doc.last_practiced, doc.source, doc.tags, doc.fields, doc.last_modified, doc.recall_model);
    }
    public to_document(): ICard {
        return this;
    }
    public note_id(): ObjectId {
        return new ObjectId(this.id.slice(0, 24));
    }
    public note_card_index(): number {
        return Number(this.id.slice(25));
    }
    public reset_last_modified(): string {
        this.last_modified = new Date().toISOString();
        return this.last_modified;
    }
}

function cardRecall(card: ICard, currentDate: number): number {
    let last_reviewed = new Date(card.last_practiced);
    let elapsedHours = Math.floor(Math.abs(currentDate - last_reviewed.getHours()) / 36e5);
    return ebisu.predictRecall(card.recall_model, elapsedHours, false); // log-probability returned, is quicker
}
