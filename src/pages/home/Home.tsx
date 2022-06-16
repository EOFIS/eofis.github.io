import React, { useEffect, useState } from "react";
import { useAuth } from "../../components/ProtectedRoute";
import styled, { useTheme } from "styled-components";
import { ResponsiveDrawer } from "../../components/ResponsiveDrawer";
import { NoteListItem } from "../../components/NoteListItem";
import { CardService } from "../../services/CardService";
import { ICardPractice } from "../../types/ICardPractice";
import { Card, CardId } from "../../types/ICard";
import { CardListItem } from "../../components/CardListItem";
import { CalendarCheck, Trash3 } from "react-bootstrap-icons";
import { NoteService } from "../../services/NoteService";
import { ICardReview } from "../../types/ICardReview";
import { mockToReview } from "../../mockdata";

const Style = styled.div`
height: 100vh;
width: 100%;
`;

export default function Home() {
    const [currentCard, setCurrentCard] = useState<Card | undefined>(undefined);
    const [toPractice, setToPractice] = useState<Array<Card>>([]);
    const [toReview, setToReview] = useState<Array<Card>>([]);
    const [practicedList, setPracticedList] = useState<Array<ICardPractice>>([]);
    const [unfoldedIndex, setUnfoldedIndex] = useState<number>(0);

    useEffect(() => {
        refreshList().then(() => {
            // nextCard();
        });
    }, []);
    // ON UNMOUNT, COMMIT REVIEWS
    // CardService.commitPractices(this.state.reviewedList);

    const refreshList = async () => {
        CardService.getLowestRecall(5).then((response) => {
            setToPractice(response);
        });
        CardService.getPendingReviews().then(response => {
            setToReview(response);
        })
        // setToPractice(mockToReview.slice(0,20));
        // setToReview(mockToReview);
    };

    // const reviewCard = (reviewScore: 0 | 1) => {
    //     if (currentCard === undefined) {
    //         return;
    //     }
    //     const review: ICardReview = { reviewScore: reviewScore, card: currentCard!! };
    //     setPracticedList([...practicedList, review]);
    //     nextCard()
    // };

    // const nextCard = () => {
    //     setCurrentCard(toPractice[0]);
    //     setToPractice(toPractice.slice(1));
    //     setUnfoldedIndex(0);
    // };

    // const unfoldNextField = () => {
    //     setUnfoldedIndex(unfoldedIndex < currentCard!!.fields.length - 1 ? unfoldedIndex + 1 : unfoldedIndex);
    // };

    const onReviewClick = (acceptable: boolean, cardi: number) => {
        const reviewedCard = toReview.at(cardi);
        if (reviewedCard) {
            CardService.reviewCards([{
                cardId: reviewedCard.id,
                isAcceptable: acceptable
            }]);
            setToReview([...toReview.slice(0,cardi).concat(toReview.slice(cardi+1))]);
        }
    }
    const onSaveCardListItem = (id: CardId, newCard: Card): boolean => {
        const modifiedCardIndex = toPractice.findIndex((c) => c.id === id);
        if (modifiedCardIndex) {
            toPractice[modifiedCardIndex] = newCard;
            CardService.update(newCard).then(() => true).catch((e) => false);
        }
        return false;
    }

    return (
        <Style>
            <ResponsiveDrawer allowScroll
                items={[
                    {
                        sectionTitle: 'Daily Practice',
                        contents: toPractice.map((card, cardi) => <CardListItem key={cardi} card={card}
                            onDeleteClick={() => { }}
                            onSave={onSaveCardListItem} />)
                    },
                    {
                        sectionTitle: 'New questions to review',
                        contents: toReview.map((card, cardi) => <CardListItem key={cardi} card={card}
                            onReviewClick={(acceptable: boolean) => onReviewClick(acceptable, cardi)}
                            onSave={onSaveCardListItem} />)
                    }
                ]}
            >
            </ResponsiveDrawer>
        </Style>
    )
}
