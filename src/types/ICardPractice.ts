import { ICard } from "./ICard";

export enum CardPracticeValue {
    INCORRECT = 0, CORRECT = 1
}

export interface ICardPractice {
    practiceScore: CardPracticeValue;
    // card as it was before the recall model was adjusted
    card: ICard; 
};