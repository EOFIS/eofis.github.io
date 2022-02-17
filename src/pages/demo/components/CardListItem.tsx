import React from "react";
import styled from "styled-components";
import { Card } from "../types/ICard";

interface ICardListItemStyleProps {
}
const CardListItemStyle = styled.li<ICardListItemStyleProps>`
overflow:hidden;
width: 100%;
margin-bottom: 2px;
box-shadow: 1px 2px 1px #333;
line-height: 1.5;
white-space: nowrap;
background: ${props => props.theme.colour.bg.layer2};
`;

export interface ICardListItemProps {
    card: Card;
}
export const CardListItem: React.FC<ICardListItemProps> = (props) => {
    return <CardListItemStyle>
        {props.card.fields[0]}
        </CardListItemStyle>
}