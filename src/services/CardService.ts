import { Card, CardId, ICard } from "../types/ICard";
import { ICardPractice } from "../types/ICardPractice";
import { authApi } from "../api";
import { IUpdateResponse } from "../types/IUpdateResponse";
import { AxiosResponse } from "axios";
import { IGetResponse } from "../types/IGetResponse";
import { ICardReview } from "../types/ICardReview";

export class CardService {
    public static getLowestRecall(howManyCards?: number, lowestRecall?: number): Promise<Card[]> {
        return new Promise((resolve, reject) => {
            authApi.get<{}, AxiosResponse<IGetResponse<ICard[]>>>("/cards/practice", {
                params: {
                    n_to_practice: howManyCards,
                    lowest_recall: lowestRecall
                }
            })
                .then((res) => {
                    if (res.status === 200) {
                        resolve(res.data.map(card_doc => Card.from_document(card_doc)))
                    } else {
                        reject(res.data.errorMessages)
                    }
                })
                .catch((reason) => {
                    if ('errorMessages' in reason) {
                        reject(reason.errorMessages)
                    } else {
                        reject(reason);
                    }
                });
        })
    }
    public static get(cardids?: Array<CardId>): Promise<ICard[]> {
        return authApi
            .get("/cards" + (cardids ? "?" + cardids.map(cardid => `cardids=${cardid}`).join("&") : ''));
    }
    public static getPendingReviews(): Promise<Array<Card>> {
        return authApi.get<IGetResponse<Array<ICard>>>("/cards/review")
            .then(res => res.data.map(c => Card.from_document(c)));
    }


    public static commitPractices(cardPractices: Array<ICardPractice>): Promise<IUpdateResponse<ICard>> {
        return authApi
            .put<Array<ICardPractice>, IUpdateResponse<ICard>>("/cards/practice", cardPractices)
    }
    public static reviewCards(cardReviews: Array<ICardReview>): Promise<Array<IUpdateResponse<ICard>>> {
        return authApi
            .put<Array<ICardReview>, Array<IUpdateResponse<ICard>>, any>("/cards/review", cardReviews)
    }

    public static update(cards: Array<ICard> | ICard | Card): Promise<IUpdateResponse<CardId>> {
        const _update = (cards: Array<ICard>) => new Promise<IUpdateResponse<ICard>>((resolve, reject) =>
            authApi
                .put("/cards", cards)
                .then((res: AxiosResponse<any, IUpdateResponse<ICard>>) => {
                    resolve(res.data);
                })
                .catch(res => {
                    reject(res);
                })
        );
        if      (cards instanceof Array) return _update( cards               );
        else if (cards instanceof Card)  return _update([cards.to_document()]);
        else                             return _update([cards]              );
    }
}