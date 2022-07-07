import React from "react";
import { Card, CardId } from "../types/ICard";
import { CardTemplateType } from "../types/Template";
import { ListItem } from "./ListItem";

export interface ICardListItemProps {
    card: Card;
    isSelected?: boolean;
    onSave: (id: CardId, newCard: Card) => boolean;
    onFlagClick?: (card: Card) => void;
    onReviewClick?: (acceptable: boolean) => void;
    readOnly?: boolean;
}
export const CardListItem: React.FC<ICardListItemProps & React.HTMLProps<HTMLLIElement>> = ({ ...props }) => {
    return <ListItem templateType={CardTemplateType.BASIC} {...props}/>
}