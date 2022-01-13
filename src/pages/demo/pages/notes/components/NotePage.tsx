import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { RouteComponentProps, useParams } from "react-router-dom";
import { INote } from "../../../types/INote";
import { ObjectId } from "mongodb";
import { NoteService } from "../../../services/NoteService";
import { TagInput } from "../../../components/TagInput";
import { CardTemplateType } from "../../../types/Template";

interface INotePageParams {
    id: string
}

export const NotePage = () => {
    const [note, setNote] = useState<INote>({
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
        template: CardTemplateType.SIMPLE
    });
    const {id} = useParams<INotePageParams>();

    useEffect(() => {
        refreshNote(id);
    });

    const refreshNote = (id: string) => {
        NoteService.get(id)
            .then((response) => {
                setNote(response)
            })
    }

    const onChangeField = (e: ChangeEvent<HTMLInputElement>, idx: number) => {
        const fieldValue = e.target.value;
        const fields = [...note.fields];
        fields[idx] = fieldValue;
        setNote({
            ...note,
            fields: fields
        });
    };

    const onChangeTemplate = (e: ChangeEvent<HTMLSelectElement>) => {
        const newTemplate = e.target.value;
        setNote({
            ...note,
            template: newTemplate
        });
    }

    const onChangeSourceTitle = (e: ChangeEvent<HTMLInputElement>) => {
        const newTitle = e.target.value;
        setNote({
            ...note,
            source: {
                ...note.source,
                title: newTitle
            }
        });
    };

    const onChangeSourceType = (e: ChangeEvent<HTMLSelectElement>) => {
        const newType = e.target.value;
        setNote({
            ...note,
            source: {
                ...note.source,
                type: newType
            }
        });
    }
    const onChangeSourceURL = (e: ChangeEvent<HTMLInputElement>) => {
        const newURL = e.target.value;
        setNote({
            ...note,
            source: {
                ...note.source,
                url: newURL
            }
        });
    };


    const onChangeTags = (tags: string[]) => {
        setNote({
            ...note,
            tags: tags
        });
    };

    const updateNote = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        NoteService.update(note._id.toString(), note);
    }


    return (
        <div>
            {note ? (
                <div className="edit-form">
                    <h4>Note</h4>
                    <form onSubmit={updateNote}>
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
                                                onChange={(e) => onChangeField(e, index)} />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-12">
                                <TagInput tags={note.tags} onChangeTags={onChangeTags} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="template-select" className="col-form-label col-sm-2">Template</label>
                            <div className="col-md-2" id="template-select">
                                <select
                                    className="form-select"
                                    aria-label="Select template for card generation"
                                    onChange={onChangeTemplate}
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
                                            onChange={onChangeSourceTitle} />
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
                                            onChange={onChangeSourceURL} />
                                    </div>
                                </div>
                                <div className="row mb-1">
                                    <label className="col-form-label col-md-2" htmlFor="source-type">Type</label>
                                    <div className="col-sm-2">
                                        <select
                                            className="form-select"
                                            id="source-type"
                                            aria-label="Select type of source"
                                            onChange={onChangeSourceType}
                                            value={note.source.type}>
                                            <option value="ARTICLE">Article</option>
                                            <option value="TEST">Test</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-1" />
                            <button type="submit" className="btn btn-primary g-2 col-sm-2">Update</button>
                        </div>
                    </form>
                </div>
            ) : ''}
        </div>
    )
}
