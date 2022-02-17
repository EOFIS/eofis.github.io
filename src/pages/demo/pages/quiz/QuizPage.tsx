import React, { useEffect, useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import { CardService } from "../../services/CardService";
import { Card, ICard } from "../../types/ICard";
import "./QuizPage.sass"
import { ICardReview } from "../../types/ICardReview";
import { ResponsiveDrawer, SideDrawer } from "../../components/SideDrawer";
import { CardDrawer } from "../../components/CardDrawer";

export interface IQuizPageProps {

}

export interface IQuizPageState {
    cards: Array<ICard>;
    currentCard: ICard | undefined;
    toReview: Array<ICard>;
    reviewedList: Array<ICardReview>;
    toReviewOpen: boolean;
    unfoldedIndex: number;
}

export default function QuizPage(props: IQuizPageProps) {

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
        <>
            <h1>Today's Quiz</h1>
            <br />
            <ResponsiveDrawer>
                Side Drawer
            </ResponsiveDrawer>
            <CardDrawer sideDrawerOpen={toReviewOpen}>
<div className="container-fluid">
                <div className="row mb-3">
                    <div className="col-3 text-left">
                        <div className="row">
                            <Button
                                className="col"
                                onClick={toggleReviewList}
                                aria-expanded={toReviewOpen}
                                aria-controls="upcomingList">
                                View upcoming
                            </Button>
                        </div>
                        {
                            toReview ? (
                                <Collapse in={toReviewOpen} className="row">
                                    <div id="upcomingList" className="container">
                                        <ol>
                                            {toReview.map((card: ICard, index: number) => (
                                                <li className="note-list-item" key={index}>{card.fields[0]}</li>
                                            ))}
                                        </ol>
                                    </div>
                                </Collapse>
                            ) : 'No cards to review'
                        }
                    </div>
                    <div className="col-9">
                        {
                            reviewedList.map((cardReview, index) => (
                                <span key={index}>
                                    {cardReview.reviewScore ? (
                                        <i className="bi bi-check-lg text-success"></i>
                                    ) : (
                                        <i className="bi bi-x-lg text-danger"></i>
                                    )}
                                </span>
                            ))
                        }
                        {
                            currentCard ? (
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title">{currentCard.source.title}</h5>
                                        <h6 className="card-subtitle">{currentCard.tags.join(', ')}</h6>
                                    </div>
                                    <div className="card-body">
                                        <div className="dots-container">
                                            {
                                                currentCard.fields && currentCard.fields?.map((field, index) => (
                                                    <span className={"dot " + (unfoldedIndex === index ? 'active' : '')} key={index}></span>
                                                ))
                                            }
                                        </div>
                                        <div className="field-container" onClick={unfoldNextField}>
                                            {
                                                currentCard.fields && (
                                                    <ul className="field-list">
                                                        {currentCard.fields?.map((field: string, index: number) => (
                                                            <li className={"card-text field-card-item" + (index > unfoldedIndex ? ' folded' : '')}
                                                                key={index}>
                                                                {field}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        {
                                            <div className={"card-review-controls " + (unfoldedIndex !== currentCard.fields.length - 1 ? 'folded' : '')}>
                                                <button className="btn button-wrong" onClick={(e) => reviewCard(0)}>
                                                    <i className="bi bi-x-lg"></i>
                                                    Wrong
                                                </button>
                                                <button className="btn button-right" onClick={(e) => reviewCard(1)}>
                                                    <i className="bi bi-check-lg"></i>
                                                    Right
                                                </button>
                                            </div>}
                                    </div>
                                </div>
                            ) : "No cards to review left"
                        }
                        {/* {cards.map((card, index, right) => (
                                <span key={index}><i className="bi bi-question"></i></span>
                            ))}<br />
                            {toReview.map((card, index, right) => (
                                <span key={index}><i className="bi bi-magic"></i></span>
                            ))}<br /> */}

                    </div>
                </div>
            </div>
            </CardDrawer>
            
        </>
    )
};