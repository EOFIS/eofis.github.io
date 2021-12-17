import { ICard } from "../types/ICard";
import { NoteService } from "./NoteService";
import ebisu from "ebisu-js";
import { ICardReview } from "../types/ICardReview";
import { api } from "../../../http-common";
import { IUpdateResponse } from "../types/IUpdateResponse";
import { AxiosResponse } from "axios";

function cardRecall(card: ICard, currentDate: number) : number {
    let last_reviewed = new Date(card.last_reviewed);
    let elapsedHours = Math.floor(Math.abs(currentDate - last_reviewed.getHours()) / 36e5);
    return ebisu.predictRecall(card.recall_model, elapsedHours, false); // log-probability returned, is quicker
}

export class CardService {
    public static getLowestRecall(amount: number) {
        return NoteService.getNotes()
            .then(response => {
                let notes = response.filter(note => note.cards !== undefined);
                notes.forEach(n => {
                    n.cards.forEach(c => {
                        c.tags = n.tags;
                        c.source = n.source;
                    })
                });
                let cards = notes.map((note) => note.cards).flat(1);
                //let cardsAugmented = ( notes.map((note) => note.cards.forEach( card => card.tags = note.tags ).forEach( card => card.source = note.source ))).flat(1).filter('Object');
                let cardsSorted = cards.sort((a, b) => {
                    const now = Date.now();
                    return cardRecall(a, now) - cardRecall(b, now);
                });
                return cardsSorted.slice(0, amount);
            })
            .catch(e => {
                console.error(e);
            });
    }
    public static getCards() : Promise<ICard[]>{
        return NoteService.getNotes()
            .then(response => {
                let notes = response.filter(note => note.cards !== undefined);
                let cards = (notes.map((note) => 'cards' in note ? note.cards : [])).flat(1).filter(Object);
                return cards;
            });
    }
    public static reviewCards(cardReviews: Array<ICardReview>) : Promise<IUpdateResponse<ICard>> {
        return new Promise<IUpdateResponse<ICard>>( (resolve, reject) => 
            api
            .post("/cards/reviews", cardReviews)
            .then((res : AxiosResponse<any, IUpdateResponse<ICard>>) => {
                resolve(res.data);
            })
            .catch(res => {
                reject(res);
            })
        );
    }
}