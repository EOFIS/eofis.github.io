import React from "react";
import styled from "styled-components";

interface IListItemStyleProps {
    isSelected?: boolean;
}
const ListItemStyle = styled.li<IListItemStyleProps>`
overflow:hidden;
width: 100%;
margin-bottom: 4px;
padding: 2px 0 2px 4px;
box-shadow: 1px 2px 1px #333;
line-height: 1.5;
white-space: nowrap;
font-size: ${props => props.theme.font.size.small};
background: ${props => props.isSelected? props.theme.colour.bg.layer1 : props.theme.colour.bg.layer2};
color: ${props => props.isSelected? props.theme.font.colour.layer1.normal : props.theme.font.colour.layer2.normal};
cursor: pointer;
&:hover {
    background: ${props => props.theme.colour.bg.layer1};
    color: ${props => props.theme.font.colour.layer1.normal};
}
`;

export interface IListItemProps {
    title: string;
    isSelected?: boolean;
    allowScroll?: boolean;
}
export const ListItem: React.FC<IListItemProps & React.HTMLProps<HTMLLIElement>> = ({ ...props }) => {
    return <ListItemStyle isSelected={props.isSelected} onClick={props.onClick}>
        {props.title}
        </ListItemStyle>
}