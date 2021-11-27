import { ObjectId } from 'mongodb';
import { ICard } from './ICard';
import { ISource } from './ISource';

export interface INote{
        _id: ObjectId | string,
        _partition: string,
        fields: Array<string>,
        tags: Array<string>,
        source: ISource,
        template: string,
        cards: Array<ICard>
}