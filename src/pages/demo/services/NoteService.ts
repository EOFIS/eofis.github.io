import { AxiosResponse } from "axios";
import { api } from "../../../http-common";
import { INote } from "../types/INote";

export class NoteService {
    public static getNotes() : Promise<INote[]> {
        return new Promise<INote[]>((resolve, reject) => {
            api
            .get("/notes")
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
                // const notes = plainToClass(INote, res.data);
                // resolve(res.data);
                //resolve(notes);
                //resolve(res.data);
            })
            .catch(res => {
                reject(res);
            });
        });
    }
    public static get(id: string) : Promise<INote> {
        return new Promise<INote>((resolve, reject) => {
            api
            .get(`/notes/${id}`)
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

    public static create(note: INote) {
        return new Promise((resolve, reject) => {
            api
            .put(`/notes`, note)
            .then((res: AxiosResponse<any>) => {
                resolve({
                    ...res.data,
                    _id: res.data._id.$oid
                });
            })
            .catch(res => {
                reject(res);
            });
        });
    }
    public static update(id: string, note: INote) {
        return new Promise((resolve, reject) => {
            api
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
            api
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