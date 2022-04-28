import React from "react";
import { Card } from "../types/ICard";
import { ListItem } from "./ListItem";

export interface ICardListItemProps {
    card: Card;
    isSelected?: boolean;
}
export const CardListItem: React.FC<ICardListItemProps & React.HTMLProps<HTMLLIElement>> = ({ ...props }) => {
    return <ListItem isSelected={props.isSelected} title={props.card.fields[0]} {...props}/>
}