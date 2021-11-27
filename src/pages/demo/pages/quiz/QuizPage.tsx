import React from "react";
import { Button, Collapse } from "react-bootstrap";
import { CardService } from "../../services/CardService";
import { ICard } from "../../types/ICard";
import "./QuizPage.sass"
import { ICardReview } from "../../types/ICardReview";

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

export default class QuizPage extends React.PureComponent<IQuizPageProps, IQuizPageState> {
    constructor(props: IQuizPageProps) {
        super(props);

        this.state = {
            cards: [],
            currentCard: undefined,
            toReview: [],
            reviewedList: [],
            toReviewOpen: true,
            unfoldedIndex: 0
        };
        this.retrieveCards = this.retrieveCards.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.toggleReviewList = this.toggleReviewList.bind(this);
        this.reviewCard = this.reviewCard.bind(this);
        this.nextCard = this.nextCard.bind(this);
        this.unfoldNextField = this.unfoldNextField.bind(this);
    }

    componentDidMount() {
        this.refreshList().then(() => {
            console.log(`componentDidMount: ${this.state.toReview}`);
            this.nextCard();
            console.log(`componentDidMount (after nextCard): ${this.state.toReview}`);
        });
    }
    componentWillUnmount() {
        CardService.reviewCards(this.state.reviewedList);
    }
    componentDidUpdate() {
    }

    async refreshList() {
        await this.retrieveCards();
        console.log(`refreshList: ${this.state.toReview}`);
        this.setState(state => ({
            toReview: [...state.cards.reverse()]
        }));
    }
    async retrieveCards() {
        const response = await CardService.getLowestRecall(20);
        this.setState({
            cards: response ? response : [],
            toReview: response ? response : []
        });
    }

    toggleReviewList() {
        this.setState(state => ({
            toReviewOpen: !state.toReviewOpen
        }));
    }

    reviewCard(reviewScore: 0 | 1) {
        if (this.state.currentCard === undefined) {
            return;
        }
        this.setState(state => {
            const review: ICardReview = { reviewScore: reviewScore, card: state.currentCard!! }
            return {
                reviewedList: [...state.reviewedList, review]
            }
        });
        this.nextCard()
    }

    nextCard() {
        this.setState(state => {
            const nextCard = state.toReview[0];
            console.log(`nextCard (setState): ${this.state.toReview}`);
            return {
                currentCard: nextCard,
                toReview: state.toReview.slice(1),
                unfoldedIndex: 0
            }
        });
    }

    unfoldNextField() {
        this.setState(state => ({
            unfoldedIndex: state.unfoldedIndex < state.currentCard!!.fields.length - 1 ? state.unfoldedIndex + 1 : state.unfoldedIndex
        }))
    }

    render() {
        const { cards, toReview, currentCard, toReviewOpen, reviewedList, unfoldedIndex } = this.state;
        return (
            <>
                <h1>Today's Quiz</h1>
                <br />
                <div className="container-fluid">
                    <div className="row mb-3">
                        <div className="col-3 text-left">
                            <div className="row">
                                <Button
                                    className="col"
                                    onClick={this.toggleReviewList}
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
                                            <div className="field-container" onClick={this.unfoldNextField}>
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
                                                    <button className="btn button-wrong" onClick={(e) => this.reviewCard(0)}>
                                                        <i className="bi bi-x-lg"></i>
                                                        Wrong
                                                    </button>
                                                    <button className="btn button-right" onClick={(e) => this.reviewCard(1)}>
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
            </>
        )
    }
};