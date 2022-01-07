import React, { ChangeEvent, useEffect, useState } from 'react';
import { useHistory, useLocation } from "react-router"
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useAuth } from '../../../components/ProtectedRoute';
import { IRegistrationRequest } from '../../../types/IRegistrationRequest';
import { AccountService } from '../../../services/AccountService';
import { Form } from 'react-bootstrap';
import { ErrorWrapper } from '../../../components/ErrorWrapper';
import { Input } from '../../../components/Input';
import { INewNoteData, INote } from '../../../types/INote';
import { NoteService } from '../../../services/NoteService';
import { CardTemplateType, TemplateDetails } from '../../../types/Template';
import { URL_PATTERN } from '../../../types/Constants';
import { SourceType } from '../../../types/ISource';
import TagInput from '../../../components/TagInput';
import { ITag } from '../../../types/ITag';

const PageStyle = styled.div``;

interface IAddNoteFormInputs extends INewNoteData {
}

export default function AddNotePage() {
    let history = useHistory();
    let auth = useAuth();

    const [tags, setTags] = useState<Array<ITag>>([]);
    let [errorMessages, setErrorMessages] = useState<Array<string>>([]);

    let [template, setTemplate] = useState<CardTemplateType>(Object.keys(CardTemplateType)[0] as CardTemplateType);

    const { register, handleSubmit, formState: { errors }, formState, getValues } = useForm<IAddNoteFormInputs>();

    let createNewNote = (newNote: INewNoteData) => {
        setErrorMessages([]);
        console.debug(`Creating new note: ${newNote} with tags [${tags}] and template ${template}`);

        // NoteService.create({
        //     _partition: `userid=${auth.user?._id}`,
        //     ...newNote
        // })
        //     .then(() => {
        //         history.push(`/demo/notes/new?created=true`);
        //     }, (messages) => {
        //         setErrorMessages(messages);
        //     });
    };

    // SubmitHandler<INewNoteData>
    const onSubmit = handleSubmit((data) => createNewNote(data));
    // const onSubmit = handleSubmit((data) => console.debug(data));

    useEffect(() => {
        const { template } = getValues();
        console.debug(template)
        setTemplate(template);
    })

    const onChangeTags = (tags: string[]) => {
        // setNote({
        //     ...note,
        //     tags: tags
        // });
    };

    return (
        <PageStyle>
            <h1>Add new note!</h1>
            <h3>Fill in the details below</h3>
            <Form onSubmit={onSubmit}>
                {errorMessages.length > 0 ?
                    <ErrorWrapper>
                        {errorMessages.map((value, index, array) =>
                            <li key={index}>{value}</li>
                        )}
                    </ErrorWrapper>
                    : ''}

                {console.debug(errors)}
                <Input
                    error={errors.template}
                    type="select"
                    placeholder="Note template"
                    {...register("template",
                        { 
                            required: "Please select a note template from the list.",
                            onChange: (e: ChangeEvent<HTMLSelectElement>) => setTemplate(CardTemplateType[e.target.value as keyof typeof CardTemplateType])
                        })}>
                    {
                        Object.keys(CardTemplateType).map((template, i, ta) =>
                            <option key={i} value={template}>{template}</option>
                        )
                    }
                </Input>

                {[...Array(TemplateDetails[template].fieldCount)].map((n, i) =>
                    <div key={`container.field.${i}`}>
                        <Input
                            key={`field.${i}`}
                            error={errors.fields && errors.fields[i]}
                            type="text"
                            placeholder={`Field ${i + 1}`}
                            {...register(
                                `fields.${i}`,
                                { required: 'Please fill in this field.' })} />
                    </div>)}
                {/* <Input type="text" error={errors.tags ? errors.tags[0] : undefined} placeholder={`Tag`} {...register(`tags.${0}`)} /> */}
                
                <TagInput onChangeTags={onChangeTags} />

                <Input type="text" placeholder="Source title" {...register("source.title", { required: "Please enter a title for the source" })} />
                {errors?.source?.title?.message}
                <Input error={errors.source?.type} type="select" placeholder="Source type" {...register("source.type", { required: "Please select a source type from the list." })}>
                    {
                        Object.keys(SourceType).map((template, i, ta) =>
                            <option key={i} value={template}>{template}</option>
                        )
                    }
                </Input>
                <Input type="text" error={errors.source?.url} placeholder="Source url" {...register("source.url",
                    { pattern: { value: URL_PATTERN, message: "Invalid url" } })} />

                <Input type="submit" value="Add note" />
            </Form>
        </PageStyle>
    );
};