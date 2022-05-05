import React from "react";
import { Card } from "../types/ICard";
import { CardTemplateType } from "../types/Template";
import { ListItem } from "./ListItem";

export interface ICardListItemProps {
    card: Card;
    isSelected?: boolean;
    editContent: (id: number | string, newContent: string[] | null) => void;
}
export const CardListItem: React.FC<ICardListItemProps & React.HTMLProps<HTMLLIElement>> = ({ ...props }) => {
    return <ListItem isSelected={props.isSelected} templateType={CardTemplateType.BASIC} {...props}/>
}