import { Card, CardId, ICard } from "../types/ICard";
import ebisu from "ebisu-js";
import { ICardReview } from "../types/ICardReview";
import { authApi } from "../api";
import { IUpdateResponse } from "../types/IUpdateResponse";
import { AxiosResponse } from "axios";
import { IGetResponse } from "../types/IGetResponse";

export class CardService {
    public static getLowestRecall(howManyCards?: number, lowestRecall?: number): Promise<Card[]> {
        return new Promise((resolve, reject) => {
            authApi.get<{}, AxiosResponse<IGetResponse<ICard[]>>>("/cards/reviews", {
                params: {
                    n_to_review: howManyCards,
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
    public static getCards(cardids?: Array<CardId>): Promise<ICard[]> {
        return authApi
            .get("/cards" + (cardids ? "?" + cardids.map(cardid => `cardids=${cardid}`).join("&") : ''));
    }

    public static reviewCards(cardReviews: Array<ICardReview>): Promise<IUpdateResponse<ICard>> {
        return new Promise<IUpdateResponse<ICard>>((resolve, reject) =>
            authApi
                .post("/cards/reviews", cardReviews)
                .then((res: AxiosResponse<any, IUpdateResponse<ICard>>) => {
                    resolve(res.data);
                })
                .catch(res => {
                    reject(res);
                })
        );
    }
}