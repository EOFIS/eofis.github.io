import { AxiosResponse } from "axios";
import { ObjectId } from "bson";
import { authApi } from "../api";
import { ICard } from "../types/ICard";
import { ICreateRequest } from "../types/ICreateRequest";
import { ICreateResponse } from "../types/ICreateResponse";
import { ICreateNoteRequest, INewNoteData, INote } from "../types/INote";

export class NoteService {
    public static getNotes() : Promise<INote[]> {
        return new Promise<INote[]>((resolve, reject) => {
            authApi
            .get("/notes", {withCredentials: true})
            .then((res : AxiosResponse<any>) => {
                resolve(res.data?.map((note : any) => ({
                    _id: note._id.$oid,
                    _partition: note._partition,
                    cards: note.cards,
                    fields: note.fields,
                    source: note.source,
                    tags: note.tags,
                    template: note.template
                })));
            })
            .catch(res => {
                reject(res);
            });
        });
    }
    public static get(id: string) : Promise<INote> {
        return new Promise<INote>((resolve, reject) => {
            authApi
            .get(`/notes/${id}`, {withCredentials: true})
            .then((res: AxiosResponse<any>) => {
                resolve({
                    ...res.data,
                    _id: res.data._id.$oid,
                });
            })
            .catch(res => {
                reject(res);
            });
        });
    }

    public static create(note: ICreateRequest<INewNoteData>) {
        return new Promise<ObjectId>((resolve, reject) => {
            authApi
            .post<ICreateRequest<INewNoteData>, AxiosResponse<[ICreateResponse<INote>, number]>>(`/notes`, note)
            .then((res) => {
                if (res.status === 201) {
                    resolve(res.data[0]._id);    
                } else {
                    reject(
                        res.data[0].errorMessages
                    )
                }
            })
            .catch(res => {
                reject(res);
            });
        });
    }
    public static update(id: string, note: INote) {
        return new Promise((resolve, reject) => {
            authApi
            .put(`/notes/${id}`, note)
            .then((res: AxiosResponse<any>) => {
                // TODO: implement typing of response
                // TODO: catch known errors here
                resolve(res.data);
            })
            .catch(res => {
                reject(res);
            });
        });
    }


    public static queryNotes(searchQuery: string) : Promise<INote[]> {
        return new Promise<INote[]>((resolve, reject) => {
            authApi
            .get("/notes", {params: {searchQuery: searchQuery}})
            .then((res: AxiosResponse<any>) => {
                resolve(res.data);
            })
            .catch(res => {
                reject(res);
            });
        });
    }
}