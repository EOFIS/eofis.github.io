import { ICard } from "./ICard";

export interface ICardReview {
    reviewScore: number;
    // card as it was before the recall model was adjusted
    card: ICard; 
};