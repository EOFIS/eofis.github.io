import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { PlusLg, Tags, TagsFill, XLg } from "react-bootstrap-icons";
import styled from "styled-components";
import { ITag } from "../types/ITag";

const TagInputStyle = styled.div<{
    isInputExpanded: boolean;
    hover: boolean;
    center?: boolean;
}>`
display: flex;
flex-wrap: wrap;
flex-direction: row;
padding: 0 0 0 4px;
gap: 8px;

.tags {
    display: flex;
    flex-wrap: wrap;
    // padding: 2px ${props => props.hover ? '0' : '25px'} 2px 0; // 24px is to allow room for the tags to expand without reflowing
    padding: 2px 0 2px 0;
    gap: 8px;
    list-style: none;
    ${props => props.center && 'justify-content: center;'}
}
.tags-icon {
    font-size: ${props => props.theme.font.size.normal};
    display: flex;
    align-items: center;
}

input {
    display: ${props => props.isInputExpanded ? 'block' : 'none'};
    border: none;
    font-size: inherit;
    padding: 4px 2px;
    background: ${props => props.theme.colour.bg.layer2};
    color: ${props => props.theme.font.colour.layer2.normal};
    width: 120px;
    border: 1px solid transparent;
    border-radius: 4px 0 0 4px;
    border-right: 0;

    &:hover {
        border: 1px solid ${props => props.theme.colour.secondary.theme};
    }
    &:focus {
        border: 1px solid ${props => props.theme.colour.primary.theme};
        outline: transparent;
    }
    &:focus, &:hover {
        border-right: 0;
    }
}
.input-container {
    padding: 0; margin: 0;
    display: flex;
    flex-direction: row;
    font-size: ${props => props.theme.font.size.small};

    & > button {
        font-size: inherit;
        background: none;
        cursor: pointer;

        &.input-toggle {
            padding: ${props => props.isInputExpanded ? '8px' : '0'};
            border: none;
            color: ${props => props.theme.colour.primary.theme};
            line-height: 16px;
        }

        &.add-tag {
            padding: 4px 8px;
            display: ${props => props.isInputExpanded ? 'block' : 'none'};
            border-radius: 0 8px 8px 0;
            border: 1px solid ${props => props.theme.colour.primary.theme};
            color: ${props => props.theme.colour.primary.theme};
            &:hover {
                background: ${props => props.theme.colour.primary.theme};
                color: inherit;
            }
        }
    }
}
`;

enum DELIMITERS {
    COMMA = 'Comma',
    SEMICOLON = 'Semicolon',
    TAB = 'Tab'
};

interface ITagInputProps {
    tags?: Array<ITag>;
    onChangeTags?: (tags: ITag[]) => void;
    readOnly?: boolean;
    showIcon?: boolean;
    center?: boolean;
};

export const TagInput = React.forwardRef((props: ITagInputProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    const [tags, setTags] = useState<Array<ITag>>(props.tags || []);
    const [newTag, setNewTag] = useState<string>("");
    const [isInputExpanded, setIsInputExpanded] = useState<boolean>(false);
    const [hover, setHover] = useState(false);

    const onDelete = (i: number) => {
        setTags(tags.filter((tag, index) => index !== i));
        props.onChangeTags && props.onChangeTags(tags);
    };

    useEffect(() => {
        setTags(props.tags || []);
    }, [props.tags]);

    const _addNewTag = (tag: string) => {
        let _newTags = [...tags, tag];
        setTags(_newTags);
        setNewTag("");
        props.onChangeTags && props.onChangeTags(_newTags);

    }
    const onAddClick = () => {
        if (newTag !== '') {
            _addNewTag(newTag);
        }
    };

    const onSubmit = (event: KeyboardEvent<HTMLInputElement>) => {
        event.preventDefault();
        let _newTag = (event.key === newTag.slice(-1)) ? newTag.slice(0, -1) : newTag;
        _addNewTag(_newTag);
    };

    const onChange = (event: ChangeEvent<HTMLInputElement>) => setNewTag(event.target.value);

    return (
        <TagInputStyle isInputExpanded={isInputExpanded} hover={hover} center={props.center}>
            <ul className={'tags'}>
                {props.showIcon&&<li className="tags-icon"><TagsFill/></li>}
                {tags && tags.map((tag, index) => (
                    <Tag readOnly={props.readOnly || props.onChangeTags === undefined} onDelete={() => onDelete(index)} tag={tag} key={index} hoverCallback={setHover} />
                ))}
                {
                    !(props.readOnly || props.onChangeTags === undefined) && <li className="input-container">
                    <input
                        type="text"
                        value={newTag}
                        onChange={onChange}
                        onKeyDown={event => (event.code === 'Enter') ? event.preventDefault() : null}
                        onKeyUp={event => (event.code === 'Comma' || event.code === 'Semicolon' || event.code === 'Enter' ? onSubmit(event) : null)}
                        placeholder="New tag name"
                        ref={ref} />
                    <button className="add-tag" onClick={onAddClick}>Add</button>
                    <button className="input-toggle" onClick={()=>setIsInputExpanded(!isInputExpanded)}>{isInputExpanded?<XLg/>:<PlusLg/>}</button>
                </li>

                }
            </ul>

        </TagInputStyle>
    );
});

const TagStyle = styled.li<{
    isHovering: boolean;
    readOnly?: boolean;
}>`
width: auto;
height: 32px;
display: flex;
align-items: center;
color: white;
padding: ${props => props.readOnly? '0 8px': '0 12px'};
font-size: ${props => props.theme.font.size.small};
list-style: none;
border-radius: 32px;
border-width: ${props => props.readOnly? '2px': '4px'};
border-style: ${props => props.readOnly? 'solid': 'none solid'};
border-color: ${props => props.theme.colour.secondary.theme};
background: ${props => props.theme.colour.secondary.theme};

transition: all 0.1s;
line-height:normal;
${props => props.readOnly ? '\
&:hover {\
    border: white solid 2px;\
}':'\
&:hover {\
    border-color: white;\
    padding: 0 4px;\
}'}

.tag-title{
    margin: ${props => props.readOnly? '0': '0 2px'};
}
.tag-close-icon {
    display: ${props => props.readOnly ? 'none' : 'block'};
    width: 4px;
    transition: width 0.1s 0.2s;
    &>*{
        width: 0px;
        opacity: 0;
    }
    ${props => !props.readOnly && '\
    &.hover{\
        &>*{\
            width: 16px;\
            transition: opacity 0.2s 0.2s;\
            display: initial;\
            opacity: 1;\
        }\
        width: 12px;\
        height: 12px;\
        margin: 0 4px;\
        color: grey;\
        cursor: pointer;\
\
        &:hover {\
            color: white;\
        }\
    }\
'}
}
`;
interface ITagProps {
    tag: ITag;
    onDelete: () => void;
    hoverCallback: (hover: boolean) => void;
    readOnly?: boolean;
}
const Tag: React.FC<ITagProps & React.HTMLProps<HTMLLIElement>> = ({ ...props }) => {
    const [isHovering, setIsHovering] = useState(false);
    return <TagStyle onMouseOver={() => {
        setIsHovering(true);
        props.hoverCallback(true);
    }} onMouseLeave={() => {
        setIsHovering(false);
        props.hoverCallback(false);
    }}
    isHovering={isHovering}
    readOnly={props.readOnly}
    >
        <span className={"tag-title"}>{props.tag}</span>
        <span className={"tag-close-icon " + (isHovering ? 'hover' : '')} onClick={() => props.onDelete()}><XLg /></span>
    </TagStyle>
};
