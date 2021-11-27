import React, { ChangeEvent, KeyboardEvent } from "react";
import style from './TagInput.module.sass';

const KeyCodes = {
    comma: 188,
    enter: [10, 13]
};
const delimiters = [...KeyCodes.enter, KeyCodes.comma];

type ITag = string;

export interface ITagInputProps {
    tags: Array<ITag>,
    onChangeTags(tags: ITag[]): void
};

interface ITagInputState {
    tags: Array<ITag>,
    newTag: string
};

export default class TagInput extends React.PureComponent<ITagInputProps, ITagInputState> {
    constructor(props: ITagInputProps) {
        super(props);

        this.state = {
            tags: this.props.tags,
            newTag: ''
        }

        this.onDelete = this.onDelete.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidUpdate(props: ITagInputProps) {
        if (this.props.tags !== props.tags) {
            this.setState(state => ({
                tags: this.props.tags
            }));
        }
    }

    onDelete(i: number) {
        const tags = this.state.tags.filter((tag, index) => index !== i);
        this.setState({
            tags: tags
        });
        this.props.onChangeTags(tags);
    }

    onSubmit(event: KeyboardEvent<HTMLInputElement>) {
        if (this.state.newTag !== '') {
            const tags = [...this.state.tags, this.state.newTag];
            this.setState(state => ({
                tags: tags,
                newTag: ''
            }));
            console.log(`NEW TAG SUBMITTED: ${tags}`);
            this.props.onChangeTags(tags);
        }
    }
    onChange(event: ChangeEvent<HTMLInputElement>) {
        this.setState(state => ({
            newTag: event.target.value
        }));
    }

    render() {
        const { tags, newTag } = this.state;
        return (
            <div className={style['tag-input']}>
                <ul className={style['tags']}>
                    {tags && tags.map((tag, index) => (
                        <li key={index} className={style["tag"]}>
                            <span className={style["tag-title"]}>{tag}</span>
                            <span className={style["tag-close-icon"]} onClick={() => this.onDelete(index)}>x</span>
                        </li>
                    ))}
                </ul>
                <input
                    type="text"
                    value={newTag}
                    onChange={this.onChange.bind(this)}
                    onKeyUp={event => (event.key === 'Enter' ? this.onSubmit(event) : null)}
                    placeholder="Press enter  to add a tag" />
            </div>
        );
    }
}