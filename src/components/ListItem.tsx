import React, { MouseEventHandler, useEffect, useState } from "react";
import { Check, CheckLg, ChevronDown, ChevronUp, Trash3, X, XLg } from "react-bootstrap-icons";
import styled from "styled-components";
import { Card } from "../types/ICard";
import { ITag } from "../types/ITag";
import { CardTemplateType, TemplateDetails } from "../types/Template";
import { NoteTemplateCycler } from "./NoteTemplateCycler";
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
font-size: ${props => props.theme.font.size.normal};
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

    &.expanded {
        white-space: break-spaces;
        color: ${props => props.theme.font.colour.layer2.normal};
        & > * {
            background: ${props => props.theme.colour.bg.layer2};
        }
    }
    & > *:not(:last-child) {
        margin-bottom: 4px;
    }

    & > * {
        padding: 2px 4px;
    }
}

.list-item-content {
}

.list-item-footer {
    display: none;
    width: 100%;
    &.expanded {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: left;
        align-items: baseline;
        gap: 4px;
    }
    & > * {
        flex-grow: 0;
    }
}


.list-item-edit-controls {
    flex-grow: 1;

    display: flex;
    flex-direction:row;
    justify-content: right;
    align-items: last baseline;
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
    templateType?: CardTemplateType;
    isSelected?: boolean;
    allowScroll?: boolean;
    onTagClick?: () => void;
    onDeleteClick?: () => void;
    onReviewClick?: (acceptable: boolean) => void;
    editContent: (id: number | string, newContent: Array<string>) => void;
}
export const ListItem: React.FC<IListItemProps & React.HTMLProps<HTMLLIElement>> = ({ ...props }) => {
    const [expanded, setExpanded] = useState(false);
    const [dirty, setDirty] = useState(false);
    const [fields, setFields] = useState<Array<string>>([]);
    const [visibleFieldCount, setVisibleFieldCount] = useState<number>(fields.length);
    const [tags, setTags] = useState<Array<ITag>>([]);
    // TODO: configure the below default value somewhere central
    const [templateType, setTemplateType] = useState<CardTemplateType>(props.templateType??CardTemplateType.BASIC);

    useEffect(() => {
        setFields(props.card.fields);
        setTags(props.card.tags);
        setVisibleFieldCount(props.card.fields.length);
    }, [props.card]);

    const setContentField = (fieldIndex: number, newFieldText: string | null) => {
        let oldFields = [...fields];
        oldFields[fieldIndex] = newFieldText || "";
        setFields(oldFields);
    }
    const handleClickOnContentField: MouseEventHandler = (e) => {
        e.stopPropagation();
        console.debug('Clicked on content field');
        // if (!expanded)
        //     setExpanded(false)
    }

    const handleSave = () => {
        setExpanded(false);
        let visibleFields = fields.slice(0,visibleFieldCount);
        props.editContent(props.card.id, visibleFields);
    }

    const onChangeTemplateType = (newTemplateType: CardTemplateType) => {
        setTemplateType(newTemplateType);
        setVisibleFieldCount( TemplateDetails[newTemplateType].fieldCount);
    }

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
                {props.onDeleteClick && <Trash3 onClick={props.onDeleteClick} />}
                {props.onReviewClick && <CheckLg onClick={() => props.onReviewClick !== undefined && props.onReviewClick(true)}/>}
                {props.onReviewClick && <XLg onClick={() => props.onReviewClick !== undefined && props.onReviewClick(false)}/>}
            </div>
            <div className={`list-item-content-wrapper ${expanded ? "expanded " : ''}`} onClick={handleClickOnContentField}>
                <div contentEditable={expanded} onInput={e => setContentField(0, e.currentTarget.textContent)} suppressContentEditableWarning={true}>
                    {props.card.fields[0]}
                </div>
                {
                    props.card.fields.length > 1 ?
                        props.card.fields.slice(1,visibleFieldCount).map((field, fi) =>
                            <div contentEditable={expanded} hidden={!expanded} onInput={e => setContentField(fi, e.currentTarget.textContent)} suppressContentEditableWarning={true} key={fi}>
                                {field}
                            </div>
                        ) : ''
                }
            </div>
            <div className={`list-item-footer ${expanded ? "expanded " : ''}`}>
                <NoteTemplateCycler value={templateType} onChange={(t: CardTemplateType) => onChangeTemplateType(t)}/>
                <TagInput onChangeTags={(tags: string[]) => setTags(tags)} tags={tags}/>
                <div className="list-item-edit-controls">
                    <a className={"save " + dirty ? ' dirty ' : ''} onClick={handleSave}>SAVE</a>
                </div>
            </div>
        </div>
    </ListItemStyle>
}