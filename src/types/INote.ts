import { ObjectId } from 'mongodb';
import { ICard } from './ICard';
import { ISource } from './ISource';
import { CardTemplateType } from './Template';

export interface INote {
        _id: ObjectId | string,
        _partition: string,
        fields: Array<string>,
        tags: Array<string>,
        source: ISource,
        template: CardTemplateType,
        cards: Array<ICard>
}

export interface INewNoteData {
        fields: Array<string>,
        tags: Array<string>,
        source: ISource,
        template: CardTemplateType,
}

export interface ICreateNoteRequest extends INewNoteData{
        _partition: string
}