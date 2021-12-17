import React, { ChangeEvent, FormEvent } from "react";
import { RouteComponentProps } from "react-router-dom";
import { INote } from "../../../types/INote";
import { ObjectId } from "mongodb";
import { NoteService } from "../../../services/NoteService";
import TagInput from "../../../components/TagInput";

interface INotePageProps {
    id: string
}
interface INotePageState {
    note: INote,
    statusMessage: string    
}

export default class NotePage extends React.PureComponent<RouteComponentProps<INotePageProps>, INotePageState> {
    constructor(props: RouteComponentProps<INotePageProps>) {
        super(props);

        this.state = {
            note: {
                _id: "",
                _partition: "",
                cards: [],
                fields: [],
                source: {
                    title: "",
                    type: "",
                    url: ""
                },
                tags: [],
                template: ""
            },
            statusMessage: ""
        };
        this.getNote = this.getNote.bind(this);
        this.onChangeField = this.onChangeField.bind(this);
        this.onChangeTags = this.onChangeTags.bind(this);
        this.updateNote = this.updateNote.bind(this);
        this.onChangeSourceTitle = this.onChangeSourceTitle.bind(this);
        this.onChangeSourceType = this.onChangeSourceType.bind(this);
        this.onChangeSourceURL = this.onChangeSourceURL.bind(this);
        this.onChangeTemplate = this.onChangeTemplate.bind(this);
    }

    componentDidMount() {
        this.getNote(this.props.match.params.id);
    }

    getNote(id: string) {
        NoteService.get(id)
            .then((response) => {
                this.setState({
                    note: response
                })
            })
    }

    onChangeField(e: ChangeEvent<HTMLInputElement>, idx: number) {
        const fieldValue = e.target.value;
        this.setState((prevState) => {
            const fields = [...prevState.note.fields]
            fields[idx] = fieldValue;
            return {
                note: {
                    ...prevState.note,
                    fields: fields
                }
            }
        })
    }
    onChangeTemplate(e: ChangeEvent<HTMLSelectElement>) {
        const newTemplate = e.target.value;
        this.setState(state => ({
                note: {
                    ...state.note,
                    template: newTemplate
                }
            })
        );
    }
    onChangeSourceTitle(e: ChangeEvent<HTMLInputElement>) {
        const newTitle = e.target.value;
        this.setState(state => ({
                note: {
                    ...state.note,
                    source: {
                        ...state.note.source,
                        title: newTitle
                    }
                }
            })
        );
    }
    onChangeSourceType(e: ChangeEvent<HTMLSelectElement>) {
        const newType = e.target.value;
        this.setState(state => ({
                note: {
                    ...state.note,
                    source: {
                        ...state.note.source,
                        type: newType
                    }
                }
            })
        );
    }
    onChangeSourceURL(e: ChangeEvent<HTMLInputElement>) {
        const newURL = e.target.value;
        this.setState(state => ({
                note: {
                    ...state.note,
                    source: {
                        ...state.note.source,
                        url: newURL
                    }
                }
            })
        );
    }


    onChangeTags(tags: string[]) {
        this.setState(state => ({
            note: {
                ...state.note,
                tags: tags
            }
        }));
    }

    updateNote(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const note = this.state.note;
        NoteService.update(note._id.toString(), note);
    }


    render() {
        const { note, statusMessage } = this.state;
        return (
            <div>
                {note ? (
                    <div className="edit-form">
                        <h4>Note</h4>
                        <form onSubmit={this.updateNote}>
                            <div className="list-group row mb-3">
                                {
                                    note.fields && note.fields.map((field: string, index: number) => (
                                        <div key={index} className="row mb-3">
                                            <label htmlFor={`form${index}`} className="col-form-label col-sm-2">Field {index}</label>
                                            <div className="col-sm-10">
                                                <input
                                                    type="text"
                                                    className="form-control-plaintext"
                                                    id={`form${index}`}
                                                    value={note.fields[index]}
                                                    onChange={(e) => this.onChangeField(e, index)} />
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-12">
                                    <TagInput tags={this.state.note.tags} onChangeTags={this.onChangeTags} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="template-select" className="col-form-label col-sm-2">Template</label>
                                <div className="col-md-2" id="template-select">
                                    <select
                                    className="form-select"
                                    aria-label="Select template for card generation"
                                    onChange={this.onChangeTemplate}
                                    value={note.template}>
                                        <option value="SIMPLE">Simple</option>
                                        <option value="BASIC">Basic</option>
                                        <option value="CLOZE">Gap-fill</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-md-2">Source</label>
                                <div className="col-md-10">
                                    <div className="row mb-1">
                                        <label className="col-form-label col-md-2" htmlFor="source-title">Title</label>
                                        <div className="col-sm-8">
                                            <input
                                                type="text"
                                                className="form-control-plaintext"
                                                id="source-title"
                                                value={note.source.title}
                                                onChange={this.onChangeSourceTitle} />
                                        </div>
                                    </div>
                                    <div className="row mb-1">
                                        <label className="col-form-label col-md-2" htmlFor="source-url">URL</label>
                                        <div className="col-sm-8">
                                            <input
                                                type="text"
                                                className="form-control-plaintext"
                                                id="source-url"
                                                value={note.source.url}
                                                onChange={this.onChangeSourceURL} />
                                        </div>
                                    </div>
                                    <div className="row mb-1">
                                        <label className="col-form-label col-md-2" htmlFor="source-type">Type</label>
                                        <div className="col-sm-2">
                                        <select
                                            className="form-select" 
                                            id="source-type"
                                            aria-label="Select type of source" 
                                            onChange={this.onChangeSourceType}
                                            value={note.source.type}>
                                            <option value="ARTICLE">Article</option>
                                            <option value="TEST">Test</option>
                                        </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-1"/>
                                <button type="submit" className="btn btn-primary g-2 col-sm-2">Update</button>
                            </div>
                        </form>
                    </div>
                ) : ''}
            </div>
        )
    }
}