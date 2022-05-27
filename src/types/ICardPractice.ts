import { ICard } from "./ICard";

export interface ICardPractice {
    practiceScore: number;
    // card as it was before the recall model was adjusted
    card: ICard; 
};