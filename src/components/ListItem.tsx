import React, { MouseEventHandler, useEffect, useState } from "react";
import { ChevronDown, ChevronUp, Trash3 } from "react-bootstrap-icons";
import styled from "styled-components";
import { Card } from "../types/ICard";
import { ITag } from "../types/ITag";
import { CardTemplateType } from "../types/Template";
import { TagInput } from "./TagInput";

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
    color: ${props => props.theme.font.colour.layer1.normal};
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
    padding: 0 2px 0 2px;
    & > * {
        float: left;
        margin: 0 4px;
    }
    & > *:hover {
        color: ${props => props.theme.font.colour.layer1.hover};
    }
}
.list-item-expansion-control {
    &.hide {
        display: none;
    }
    
}

.list-item-content-wrapper {
    z-index: 0;
    position: relative;
    margin-right: 32px;
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 2px 4px;

    &.expanded {
        background: ${props => props.theme.colour.bg.layer2};
        white-space: break-spaces;
        color: ${props => props.theme.font.colour.layer2};
    }
}

.list-item-content {
}

.list-item-footer {
    display: none;
    &.expanded {
        display: block;
    }
    flex-direction: row;
    & > * {
        float: left;
        height: 100%;
        margin: auto;
    }
}

.list-item-edit-controls {
    float: right;
    height: 100%;
}

.pull-left {
    float: left;
}

.dirty {
    color: ${props => props.theme.font.colour.dirty}
}
`;

const EditControlsForCardType = {
    SIMPLE: [],
    BASIC: [],

}

export interface IListItemProps {
    card: Card;
    templateType: CardTemplateType;
    isSelected?: boolean;
    allowScroll?: boolean;
    onTagClick?: () => void;
    onDeleteClick?: () => void;
    editContent: (id: number | string, newContent: Array<string>) => void;
}
export const ListItem: React.FC<IListItemProps & React.HTMLProps<HTMLLIElement>> = ({ ...props }) => {
    const [expanded, setExpanded] = useState(false);
    const [dirty, setDirty] = useState(false);
    const [content, setContent] = useState<Array<string>>([]);
    const [tags, setTags] = useState<Array<ITag>>([]);

    const setContentField = (fieldIndex: number, newFieldText: string | null) => {
        let oldContent = [...content];
        oldContent[fieldIndex] = newFieldText || "";
        setContent(oldContent);
    }
    const handleClickOnContentField: MouseEventHandler = (e) => {
        e.stopPropagation();
        console.debug('Clicked on content field');
        // if (!expanded)
        //     setExpanded(false)
    }

    const handleSave = () => {
        setExpanded(false);
        props.editContent(props.card.id, content);
    }

    useEffect(() => {
        setContent(props.card.fields);
        setTags(props.card.tags);
    }, [props.card]);

    return <ListItemStyle isSelected={props.isSelected} onClick={props.onClick}>
        <div className="list-item-tag-abbreviation">
            <a onClick={props.onTagClick}>
                <b>PMP</b>
            </a>
        </div>
        {/* <div className="focus-dot"><b>·</b></div> */}
        <div className={`list-item-content ${expanded ? "expanded " : ''}`}> {/* onClick={() => setExpanded(!expanded)} onDoubleClick={() => setExpanded(!expanded)}> */}
            <div className="list-item-controls pull-right">
                <ChevronDown onClick={() => setExpanded(true)} className={`list-item-expansion-control ${expanded ? "hide" : ""}`} />
                <ChevronUp onClick={() => setExpanded(false)} className={`list-item-expansion-control ${expanded ? "" : "hide"}`} />
                <Trash3 onClick={props.onDeleteClick} />
            </div>
            <div className={`list-item-content-wrapper ${expanded ? "expanded " : ''}`} onClick={handleClickOnContentField}>
                <div contentEditable={expanded} onInput={e => setContentField(0, e.currentTarget.textContent)} >
                    {props.card.fields[0]}
                </div>
                {
                    props.card.fields.length > 0 ?
                        props.card.fields.slice(1).map((field, fi) =>
                            <div contentEditable={expanded} hidden={!expanded} onInput={e => setContentField(fi, e.currentTarget.textContent)} >
                                {field}
                            </div>
                        ) : ''
                }
            </div>
            <div className={`list-item-footer ${expanded ? "expanded " : ''}`}>
                <div className="list-item-template-switcher">{props.templateType}</div>
                <div className="pull-left"><TagInput onChangeTags={(tags: string[]) => setTags(tags)} tags={tags} /></div>
                <div className="list-item-edit-controls pull-right"><a className={"save " + dirty ? ' dirty ' : ''} onClick={handleSave}>SAVE</a></div>
            </div>
        </div>
    </ListItemStyle>
}