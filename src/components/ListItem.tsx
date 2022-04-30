import React, { useState } from "react";
import { Trash3 } from "react-bootstrap-icons";
import styled from "styled-components";

interface IListItemStyleProps {
    isSelected?: boolean;
}
const ListItemStyle = styled.li<IListItemStyleProps>`
display: inline-block;
overflow:hidden;
width: 100%;
margin-bottom: 4px;
line-height: 1.5;
font-size: ${props => props.theme.font.size.small};
background: none;//${props => props.theme.colour.bg.layer1};
color: ${props => props.theme.font.colour.layer0.normal};
cursor: pointer;
&:hover {
    background: ${props => props.theme.colour.hover.layer1};
    color: ${props => props.theme.font.colour.layer1.hover};
}

margin-top: 0;
padding: 2px 0 2px 4px;

.list-item-tag-abbreviation {
    display: inline-block;
    float: left;
    padding-left: 0;
    text-align: left;
    width: 48px;
    margin-right: 4px;
    top: 0px;
    left: 0px;
}

.focus-dot {
    width: 16px;
    display: inline-block;
    float: left;
    text-align: center;
}

.list-item-controls {
    z-index: 1;
    position: relative;
    text-align: right;
    width: 32px;
    padding: 0 2px 0 2px;
}

.list-item-content-wrapper {
    z-index: 0;
    position: relative;
    margin-right: 32px;
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &.expanded {
        white-space: break-spaces;
    }
}

.list-item-content {
}
`;


export interface IListItemProps {
    title: string;
    isSelected?: boolean;
    allowScroll?: boolean;
    onTagClick?: () => void;
    onDeleteClick?: () => void;
}
export const ListItem: React.FC<IListItemProps & React.HTMLProps<HTMLLIElement>> = ({ ...props }) => {
    const [expanded, setExpanded] = useState(false);

    return <ListItemStyle isSelected={props.isSelected} onClick={props.onClick}>
        <div className="list-item-tag-abbreviation">
            <a onClick={props.onTagClick}>
            <b>PMP</b>
            </a>
        </div>
        {/* <div className="focus-dot"><b>·</b></div> */}
        <div className="list-item-content">
            <div className="list-item-controls pull-right"><Trash3 onClick={props.onDeleteClick}/></div>
            <div className={`list-item-content-wrapper ${expanded ? "expanded " : ''}`}>
                <a onClick={() => setExpanded(!expanded)}>
                {props.title}
                </a>
            </div>
        </div>
    </ListItemStyle>
}