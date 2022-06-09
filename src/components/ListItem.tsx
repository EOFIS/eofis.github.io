import React, { MouseEventHandler, useEffect, useState } from "react";
import { Check, CheckLg, ChevronDown, ChevronUp, Trash3, X, XLg } from "react-bootstrap-icons";
import ReactTextareaAutosize from "react-textarea-autosize";
import styled from "styled-components";
import { Card, CardId, ICard } from "../types/ICard";
import { ISource } from "../types/ISource";
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
background: ${props => props.theme.colour.bg.layer1};
color: ${props => props.theme.font.colour.layer0.normal};
&:hover {
    outline: 2px solid ${props => props.theme.colour.primary.theme}
    color: ${props => props.theme.colour.primary.textHover};
}

margin-top: 0;
padding: 2px 0 2px 4px;

.list-item-tag-abbreviation {
    display: inline-block;
    float: left;
    padding-left: 0;
    text-align: left;
    width: 48px;
    margin-left: 4px;
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
    cursor: pointer;

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
    color: ${props => props.theme.font.colour.layer2.normal};

    &.expanded {
        white-space: break-spaces;
        & > * {
            display: block;
            width: fill-available;
            color: ${props => props.theme.font.colour.layer0.normal};
            line-height: 1.5;
            font-size: ${props => props.theme.font.size.normal};
            overflow: hidden;
            resize: none;
            font-family: inherit;

            background: ${props => props.theme.colour.bg.layer2};

            border-radius: 4px;
            &:focus-visible {
                background: ${props => props.theme.colour.bg.layer1};
                border: 1px solid ${props => props.theme.colour.primary.theme};
                outline: none;
            }
        }
    }
    & > *:not(:last-child) {
        margin-bottom: 4px;
    }
    & > * {
        padding: 2px 4px;
        border: 1px solid ${props => props.theme.colour.bg.layer1};
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
    gap: 0 8px;

    font-size: ${props => props.theme.font.size.small};

    & > * {
        cursor: pointer;
    }
}
a.save {
    padding: 4px 8px;
    border-radius: 8px;
    border: 1px solid ${props => props.theme.colour.primary.theme};
    // font-weight: bold;
    color: ${props => props.theme.colour.primary.theme};
    &.dirty {
        background: ${props => props.theme.colour.primary.theme};
        color: inherit;
    }
}
a.cancel {
    color: ${props => props.theme.colour.primary.theme};
    &.dirty {
        color: inherit;
    }
}

.pull-left {
    float: left;
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
    onSave: (id: CardId, newCard: Card) => boolean;
}
export const ListItem: React.FC<IListItemProps & React.HTMLProps<HTMLLIElement>> = ({ ...props }) => {
    const [fields, setFields] = useState<Array<string>>([]);
    const [tags, setTags] = useState<Array<ITag>>([]);
    const [source, setSource] = useState<ISource>(props.card.source);

    const [expanded, setExpanded] = useState(false);
    const [dirty, setDirty] = useState<{
        fields: Array<boolean>,
        tags: boolean,
        source: { title: boolean, type: boolean, url: boolean }
    }>({ fields: [], source: { title: false, type: false, url: false }, tags: false });
    const [visibleFieldCount, setVisibleFieldCount] = useState<number>(fields.length);
    // TODO: configure the below default value somewhere central
    const [templateType, setTemplateType] = useState<CardTemplateType>(props.templateType ?? CardTemplateType.BASIC);

    useEffect(() => {
        reloadCard();
    }, [props.card]);

    const isDirty = (): boolean => {
        return dirty.fields.includes(true) || dirty.tags || dirty.source.title || dirty.source.type || dirty.source.url;
    }
    const setField = (fieldIndex: number, newFieldText: string | null) => {
        let oldFields = [...fields];
        oldFields[fieldIndex] = newFieldText || "";
        setFields(oldFields);
        if (newFieldText !== props.card.fields[fieldIndex]) {
            setDirty({
                ...dirty,
                fields: [...dirty.fields.slice(0,fieldIndex), true, ...dirty.fields.slice(fieldIndex+1)]
            });
        } else {
            setDirty({
                ...dirty,
                fields: [...dirty.fields.slice(0,fieldIndex), false, ...dirty.fields.slice(fieldIndex+1)]
            });
        }
    }
    const handleClickOnContentField: MouseEventHandler = (e) => {
        e.stopPropagation();
        // if (!expanded)
        //     setExpanded(false)
    }

    const handleSave = () => {
        setExpanded(false);
        if (!isDirty()) return;
        let visibleFields = fields.slice(0, visibleFieldCount);
        let savedCard: Card = Card.from_document({
            ...props.card.to_document(),
            fields: visibleFields,
            tags: tags,
            source: source
        });
        savedCard.reset_last_modified();

        props.onSave(props.card.id, savedCard);
    }
    const handleCancel = () => {
        setExpanded(false);
        if (!isDirty()) return;
        reloadCard();
    }
    const reloadCard = () => {
        setFields(props.card.fields);
        setTags(props.card.tags);
        setSource(props.card.source);

        setDirty({
            tags: false,
            fields: props.card.fields.map(() => false),
            source: { title: false, type: false, url: false }
        });
        setVisibleFieldCount(props.card.fields.length);
    }


    const onChangeTemplateType = (newTemplateType: CardTemplateType) => {
        setTemplateType(newTemplateType);
        setVisibleFieldCount(TemplateDetails[newTemplateType].fieldCount);
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
                {props.onReviewClick && <CheckLg onClick={() => props.onReviewClick !== undefined && props.onReviewClick(true)} />}
                {props.onReviewClick && <XLg onClick={() => props.onReviewClick !== undefined && props.onReviewClick(false)} />}
            </div>
            <div className={`list-item-content-wrapper ${expanded ? "expanded " : ''}`} onClick={handleClickOnContentField}>
                {
                    expanded ?
                        <ReactTextareaAutosize value={fields[0]} onChange={e => setField(0, e.currentTarget.value)} />
                        : <div onInput={e => setField(0, e.currentTarget.textContent)} >
                            {fields[0]}
                        </div>}
                {
                    fields.length > 1 && expanded?
                        fields.slice(1, visibleFieldCount).map((field, fi) =>
                            <ReactTextareaAutosize value={field} onChange={e => setField(fi+1, e.currentTarget.value)} key={fi} />
                        ) : ''
                }
            </div>
            <div className={`list-item-footer ${expanded ? "expanded " : ''}`}>
                <NoteTemplateCycler value={templateType} onChange={(t: CardTemplateType) => onChangeTemplateType(t)} />
                <TagInput onChangeTags={(tags: string[]) => {
                    setTags(tags);
                    setDirty({
                        ...dirty,
                        tags: true
                    })
                }} tags={tags} />
                <div className="list-item-edit-controls">
                    <a className={'cancel ' + (isDirty() ? ' dirty ' : '')} onClick={handleCancel}>Cancel</a>
                    <a className={'save '   + (isDirty() ? ' dirty ' : '')} onClick={handleSave}>Save</a>
                </div>
            </div>
        </div>
    </ListItemStyle>
}