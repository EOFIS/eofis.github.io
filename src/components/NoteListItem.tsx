import React from "react";
import { INote } from "../types/INote";
import { ListItem } from "./ListItem";

export interface INoteListItemProps {
    note: INote;
    isSelected?: boolean;
}
export const NoteListItem: React.FC<INoteListItemProps & React.HTMLProps<HTMLLIElement>> = ({ ...props }) => {
    return <ListItem isSelected={props.isSelected} title={props.note.fields[0]} {...props}/>
}