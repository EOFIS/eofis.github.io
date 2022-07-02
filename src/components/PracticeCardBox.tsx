import React, { useEffect, useState } from "react"
import { Check, Check2, CheckAll, CheckLg, FlagFill, X, XLg } from "react-bootstrap-icons";
import styled from "styled-components";
import { Card } from "../types/ICard"
import { CardPracticeValue } from "../types/ICardPractice";
import { Button } from "./Button";
import { TagInput } from "./TagInput";

const PracticeCardBoxStyle = styled.div<{
}>`
.practice-card-box-container {
    display: flex;
    flex-direction: column;
    width: 100%;
}

min-width: 400px;
max-width: 600px;
margin: auto;
padding: 0;
flex-grow: 1;
.practice-box-empty {
    text-align: center;
}
.practice-card-box {
    background: ${props => props.theme.colour.bg.layer1};
    border-radius: 16px;
}
.flashcard-content {
    display: flex;
    flex-direction: column;
    margin: 0;
    cursor: pointer;
    p {
        margin: 8px 16px;
        text-align: justify;
        opacity: 0;
        &.visible {
            opacity: 1;
        }
    }
    p:not(:last-child) {
        margin-top: 0;
    }
    p:first-child {
        margin-top: 16px;
    }
    p:last-child:not(:first-child) {
        margin: 8px 0 0 0;
        padding: 4px;
        background: white;
        color: black;
        font-weight: bold;
        text-align: center;
        &:hover {
            transition: all 0.3s;
            border: 0px solid ${props => props.theme.colour.bg.layer1};
            border-width: 0 16px;
        }
    }
}
.practice-controls {
    margin: 0; padding: 0;
    display: flex;
    justify-content: space-evenly;
    pointer-events: none;
    transition: all 0s 0s;
    opacity: 0;
    &.fullyUnfolded {
        transition: opacity 0.3s 0.2s, height 0s 0.2s;
        opacity: 1;
        pointer-events: auto;
    }
    &>svg{
        width: 4em;
        height: 4em;
        transition: all 0.3s;
        &.correct:hover {
            color: var(--colour-correct);
        }
        &.incorrect:hover {
            color: var(--colour-incorrect);
        }
        cursor: pointer;
    }
}
.review-controls {
    margin-bottom: 8px;
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
    align-items: right;
    &>svg{
        width: 1.2em;
        height: 1.2em;
        transition: all 0.5s;
        color: var(--colour-inactive);
        &.flag:hover {
            color: var(--colour-incorrect);
        }
        cursor: pointer;
    }
}
`;

export const PracticeCardBox: React.FC<{
    card?: Card;
    onLoadMore: () => void;
    onPracticeCard: (card: Card, practiceScore: CardPracticeValue) => void;
}> = (props) => {
    const [unfoldedIndex, setUnfoldedIndex] = useState<number>(0);
    useEffect(() => {
        setUnfoldedIndex(0);
    }, [props.card]);

    const unfoldNextField = () => {
        props.card && setUnfoldedIndex(unfoldedIndex < props.card.fields.length - 1 ? unfoldedIndex + 1 : unfoldedIndex);
    };

    const onPracticeCard = (score: CardPracticeValue) => (props.card !== undefined) && props.onPracticeCard(props.card, score);

    return <PracticeCardBoxStyle>
        {props.card ? <div className="practice-card-box-container">
            <div className="review-controls"><FlagFill className="flag"/></div>
            <div className="practice-card-box">
                <div className="flashcard-content" onClick={unfoldNextField}>
                    {props.card.fields.map((f, fi) => <p key={fi} className={unfoldedIndex>=fi?'visible':''}>{f}</p>)}
                    {/* {props.card.fields.map((f, fi) => <p key={fi}>{f}</p>)} */}
                </div>
                <div className={`practice-controls ${(unfoldedIndex + 1 === props.card?.fields.length) ? 'fullyUnfolded' : ''}`}>
                    <Check className="correct" onClick={() => onPracticeCard(CardPracticeValue.CORRECT)} />
                    <X className="incorrect" onClick={() => onPracticeCard(CardPracticeValue.INCORRECT)} />
                </div>
            </div>
            <TagInput center showIcon readOnly tags={props.card?.tags} />
        </div>
            :
            <div className={"practice-box-empty"}>
                <p>No cards left to practice today!</p>
                <p>You can always load more to keep practicing.</p>
                <Button onClick={props.onLoadMore} primary={false}>Load more</Button>
            </div>
        }
    </PracticeCardBoxStyle>
}
