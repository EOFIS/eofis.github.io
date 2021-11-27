import React, { useState, useEffect, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { NoteService } from "../../services/NoteService";
import { INote } from "../../types/INote";
import { ObjectId } from "mongodb";
import BSON from "bson";

export interface INotesPageProps {

}

export interface INotesPageState {
    notes: Array<INote>,
    currentNote: INote | null,
    currentIndex: number,
    searchQuery: string
}

export default class NotesPage extends React.PureComponent<INotesPageProps, INotesPageState> {
    constructor(props: INotesPageProps) {
        super(props);

        this.state = {
            notes: [],
            currentNote: null,
            currentIndex: -1,
            searchQuery: ""
        };

        this.onChangeSearchQuery = this.onChangeSearchQuery.bind(this);
    
        this.retrieveNotes = this.retrieveNotes.bind(this);
    
        this.refreshList = this.refreshList.bind(this);
    
        this.setActiveNote = this.setActiveNote.bind(this);
        this.search = this.search.bind(this);
    }

    componentDidMount() {
        this.retrieveNotes();
    }

    onChangeSearchQuery(e: ChangeEvent<HTMLInputElement>) {
        const searchQuery = e.target.value;

        this.setState({
            searchQuery: searchQuery
        });
    }

    retrieveNotes() {
        NoteService.getNotes()
            .then(response => {
                this.setState({
                    // TODO: remove this reverse
                    notes: response.reverse()
                })
            })
    }

    refreshList() {
        this.retrieveNotes();
        this.setState({
            currentNote: null,
            currentIndex: -1
        });
    }

    setActiveNote(note: INote, index: number) {
        this.setState({
            currentNote: note,
            currentIndex: index
        });
        console.log(this.state.currentNote);
    }

    search() {
        this.setState({
            currentNote: null,
            currentIndex: -1
        });

        NoteService.queryNotes(this.state.searchQuery)
            .then(response => {
                this.setState({
                    notes: response
                });
            })
            .catch(err => {
                console.log(`Error querying notes: ${err}`);
            })
    }

    render() {
        const {
            currentIndex,
            currentNote,
            notes,
            searchQuery
        } = this.state;
        return (
            <>
                <div className="list row">
                    <div className="col-md-8">
                        <div className="input-groyp mb-3">
                            <input type="text" className="form-control" placeholder="Search by field, tags, etc." value={searchQuery} onChange={this.onChangeSearchQuery} />
                            <div className="input-group-append">
                                <button
                                    className="btn bt-outline-secondary"
                                    type="button"
                                    onClick={this.search}>
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h4>Notes List</h4>
                        <ul className="list-group">
                            {
                                notes && notes.map((note: INote, index: number) => (
                                    <li
                                        className={
                                            "list-group-item " + (index === currentIndex ? "active" : "")
                                        }
                                      onClick={() => this.setActiveNote(note, index)}
                                      key={index}
                                      >
                                          {note.fields[0]}
                                          </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="col-md-6">
                        {currentNote ? (
                            <div>
                                <h4>Note</h4>
                                <div>
                                    <label>
                                        <strong>Field 1</strong>
                                    </label>
                                    {" " + currentNote.fields[0]}
                                </div>
                                <div>
                                    <label>
                                        <strong>Field 2</strong>
                                    </label>
                                    {" " + currentNote.fields[1]}
                                </div>
                                <div>
                                    <label>
                                        <strong>Tags</strong>
                                    </label>
                                    {" " + currentNote.tags.join(', ')}
                                </div>
                                <div>
                                    <label>
                                        <strong>Source</strong>
                                    </label>
                                    {" " + currentNote.source.title}
                                </div>
                                <Link to={'/demo/notes/' + currentNote._id }
                                className="badge badge-warning">
                                    Edit
                                </Link>
                            </div>
                        ) : <div>
                            <br/>
                            <p>Please select a note to view.</p>
                            </div>
                            }
                    </div>
                </div>
            </>
        );
    }
}