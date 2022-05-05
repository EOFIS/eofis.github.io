import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import styled from "styled-components";
import { ITag } from "../types/ITag";
import { Input } from "./Input";
// import style from './TagInput.module.sass';

const TagInputStyle = styled.div<{}>`
display: flex;
flex-wrap: wrap;
min-height: 48px;
padding: 0 8px;
  // border: 1px solid #d6d8da;
  // border-radius: 6px;

input {
  flex: 1;
  border: none;
  height: 46px;
  font-size: 14px;
  padding: 4px 0 0;
  display: inline-block;
  float: left;
}
input:focus {
  outline: transparent;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 8px 0 0;
}
.tag {
  width: auto;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 0 8px;
  font-size: 14px;
  list-style: none;
  border-radius: 6px;
  margin: 0 8px 8px 0;
  background: #2b2934;
}
.tag-title{
  margin-top: 3px;
}
.tag-close-icon {
  display: block;
  width: 16px;
  height: 16px;
  line-height: 16px;
  text-align: center;
  font-size: 14px;
  margin-left: 8px;
  color: #2b2934;
  border-radius: 50%;
  background: #fff;
  cursor: pointer;
}
`;

enum DELIMITERS {
    COMMA = 'Comma',
    SEMICOLON = 'Semicolon',
    TAB = 'Tab'
};

export interface ITagInputProps {
    tags?: Array<ITag>,
    onChangeTags(tags: ITag[]): void,
};

export const TagInput = React.forwardRef((props: ITagInputProps, ref) => {
    const [tags, setTags] = useState<Array<ITag>>(props.tags || []);
    const [newTag, setNewTag] = useState<string>("");

    const onDelete = (i: number) => {
        setTags(tags.filter((tag, index) => index !== i));
        props.onChangeTags(tags);
    };

    useEffect(() => {
        setTags(props.tags || []);
    }, [props.tags]);

    const onSubmit = (event: KeyboardEvent<HTMLInputElement>) => {
        event.preventDefault();
        if (newTag !== '') {
            let _newTag = (event.key === newTag.slice(-1)) ? newTag.slice(0, -1) : newTag;
            let _newTags = [...tags, _newTag];
            setTags(_newTags);
            setNewTag("");
            props.onChangeTags(_newTags);
        }
    }
    const onChange = (event: ChangeEvent<HTMLInputElement>) => setNewTag(event.target.value);

    return (
        <TagInputStyle>
            <ul className={'tags'}>
                {tags && tags.map((tag, index) => (
                    <li key={index} className={"tag"}>
                        <span className={"tag-title"}>{tag}</span>
                        <span className={"tag-close-icon"} onClick={() => onDelete(index)}>x</span>
                    </li>
                ))}
            </ul>
            <Input
                type="text"
                value={newTag}
                onChange={onChange}
                onKeyDown={event => (event.code === 'Enter') ? event.preventDefault() : null}
                onKeyUp={event => (event.code === 'Comma' || event.code === 'Semicolon' || event.code === 'Enter' ? onSubmit(event) : null)}
                placeholder="Press enter, comma, or semicolon to add a tag"
                // labeltext="Add tags"
                inline={true}
                ref={ref} />
        </TagInputStyle>
    );
}
)