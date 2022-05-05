import React, { useEffect, useState } from "react";
import { useAuth } from "../../components/ProtectedRoute";
import styled, { useTheme } from "styled-components";
import { ResponsiveDrawer } from "../../components/ResponsiveDrawer";
import { NoteListItem } from "../../components/NoteListItem";
import { CardService } from "../../services/CardService";
import { ICardReview } from "../../types/ICardReview";
import { Card } from "../../types/ICard";
import { CardListItem } from "../../components/CardListItem";
import { CalendarCheck, Trash3 } from "react-bootstrap-icons";

const Style = styled.div`
height: 100vh;
width: 100%;
`;

export default function Home() {
    let auth = useAuth();
    const theme = useTheme();

    const [cards, setCards] = useState<Array<Card>>([]);
    const [currentCard, setCurrentCard] = useState<Card | undefined>(undefined);
    const [toReview, setToReview] = useState<Array<Card>>([]);
    const [reviewedList, setReviewedList] = useState<Array<ICardReview>>([]);
    const [toReviewOpen, setToReviewOpen] = useState<boolean>(true);
    const [unfoldedIndex, setUnfoldedIndex] = useState<number>(0);

    useEffect(() => {
        refreshList().then(() => {
            nextCard();
        });
    }, []);
    // ON UNMOUNT, COMMIT REVIEWS
    // CardService.reviewCards(this.state.reviewedList);

    const refreshList = async () => {
        retrieveCards().then(() => {
            setToReview([...cards]);
        }
        )
    };
    const retrieveCards = async () => {
        CardService.getLowestRecall(20).then((response) => {
            setCards(response);
            setToReview(response);
        });
    };

    const toggleReviewList = () => {
        setToReviewOpen(!toReviewOpen);
    };

    const reviewCard = (reviewScore: 0 | 1) => {
        if (currentCard === undefined) {
            return;
        }
        const review: ICardReview = { reviewScore: reviewScore, card: currentCard!! };
        setReviewedList([...reviewedList, review]);
        nextCard()
    };

    const nextCard = () => {
        setCurrentCard(toReview[0]);
        setToReview(toReview.slice(1));
        setUnfoldedIndex(0);
    };

    const unfoldNextField = () => {
        setUnfoldedIndex(unfoldedIndex < currentCard!!.fields.length - 1 ? unfoldedIndex + 1 : unfoldedIndex);
    };


    return (
        <Style>
            <ResponsiveDrawer allowScroll>
                { toReview && toReview.map((card, cardi) => <CardListItem key={cardi} card={card} editContent={function (id: string | number, newContent: string[] | null): void {
                    throw new Error("Function not implemented.");
                } } />)}
            </ResponsiveDrawer>
        </Style>
    )
}
