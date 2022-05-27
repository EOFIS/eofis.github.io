import { CardId } from "./ICard";

export interface ICardReview {
    isAcceptable: boolean;
    cardId: CardId;
};