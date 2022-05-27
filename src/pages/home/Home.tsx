import React, { useEffect, useState } from "react";
import { useAuth } from "../../components/ProtectedRoute";
import styled, { useTheme } from "styled-components";
import { ResponsiveDrawer } from "../../components/ResponsiveDrawer";
import { NoteListItem } from "../../components/NoteListItem";
import { CardService } from "../../services/CardService";
import { ICardPractice } from "../../types/ICardPractice";
import { Card } from "../../types/ICard";
import { CardListItem } from "../../components/CardListItem";
import { CalendarCheck, Trash3 } from "react-bootstrap-icons";
import { NoteService } from "../../services/NoteService";
import { ICardReview } from "../../types/ICardReview";

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
        CardService.getLowestRecall(20).then((response) => {
            setToPractice(response);
        });
        CardService.getPendingReviews().then(response => {
            setToReview(response);
        })
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


    return (
        <Style>
            <ResponsiveDrawer allowScroll
                items={[
                    {
                        sectionTitle: 'Practice',
                        contents: toPractice.map((card, cardi) => <CardListItem key={cardi} card={card}
                            onDeleteClick={() => { }}
                            editContent={function (id: string | number, newContent: string[] | null): void { throw new Error("Function not implemented."); }} />)
                    },
                    {
                        sectionTitle: 'Review',
                        contents: toReview.map((card, cardi) => <CardListItem key={cardi} card={card}
                            onReviewClick={(acceptable: boolean) => onReviewClick(acceptable, cardi)}
                            editContent={function (id: string | number, newContent: string[] | null): void { throw new Error("Function not implemented."); }} />)
                    }
                ]}
            >
            </ResponsiveDrawer>
        </Style>
    )
}
