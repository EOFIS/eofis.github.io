import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { ITag } from "../types/ITag";
import { Input } from "./Input";
import style from './TagInput.module.sass';

enum DELIMITERS {
    COMMA = 'Comma',
    SEMICOLON = 'Semicolon',
    TAB = 'Tab'
};

export interface ITagInputProps {
    tags?: Array<ITag>,
    onChangeTags(tags: ITag[]): void
};

export default function TagInput(props: ITagInputProps) {
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
            setTags([...tags, _newTag]);
            setNewTag("");
            props.onChangeTags(tags);
        }
    }
    const onChange = (event: ChangeEvent<HTMLInputElement>) => setNewTag(event.target.value);

    return (
        <div className={style['tag-input']}>
            <Input
                type="text"
                value={newTag}
                onChange={onChange}
                onKeyDown={event => (event.code === 'Enter' || event.code === 'Tab') ? event.preventDefault() : null}
                onKeyUp={event => (event.code === 'Comma' || event.code === 'Semicolon' || event.code === 'Tab' || event.code === 'Enter' ? onSubmit(event) : null)}
                placeholder="Press comma, semicolon or tab to add a tag"
                labeltext="Add tags" />
                <ul className={style['tags']}>
                {tags && tags.map((tag, index) => (
                    <li key={index} className={style["tag"]}>
                        <span className={style["tag-title"]}>{tag}</span>
                        <span className={style["tag-close-icon"]} onClick={() => onDelete(index)}>x</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
