import React, { useState, useEffect, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { NoteService } from "../../services/NoteService";
import { INote } from "../../types/INote";
import { StyledLink } from "../../components/StyledLink";
import StyledButton from "../../components/StyledButton";
import { NoteListItem } from "../../components/NoteListItem";
import { ResponsiveDrawer } from "../../components/ResponsiveDrawer";

export interface INotesPageProps {

}

export interface INotesPageState {
    notes: Array<INote>,
    currentNote: INote | null,
    currentIndex: number,
    searchQuery: string
}

export default function NotesPage(props: INotesPageProps) {
    const [notes, setNotes] = useState<Array<INote>>([]);
    const [currentNote, setCurrentNote] = useState<INote | null>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(-1);
    const [searchQuery, setSearchQuery] = useState<string>("");

    useEffect(() => {
        retrieveNotes();
    }, []);

    const onChangeSearchQuery = (e: ChangeEvent<HTMLInputElement>) => {
        const searchQuery = e.target.value;
        setSearchQuery(searchQuery);
    };

    const retrieveNotes = () => {
        NoteService.getNotes()
            .then(response => {
                // TODO: remove this reverse
                setNotes(response.reverse());
            })
            .catch(err => {
                console.error(`ERROR RETRIEVING NOTES: ${JSON.stringify(err)}`);
            })
    };

    const refreshList = () => {
        retrieveNotes();
        setCurrentNote(null);
        setCurrentIndex(-1);
    };

    const setActiveNote = (note: INote, index: number) => {
        setCurrentNote(note);
        setCurrentIndex(index);
    };

    const search = () => {
        setCurrentNote(null);
        setCurrentIndex(-1);

        NoteService.queryNotes(searchQuery)
            .then(response => setNotes(response)
            )
            .catch(err =>
                console.error(`Error querying notes: ${err}`)
            );
    };

    return (
        <>
            <div className="list row">
                {/* <div className="col-md-8">
                    <Input type="text" title="Search" placeholder="Search by field, tags, etc." value={searchQuery} onChange={onChangeSearchQuery} />
                    <StyledButton
                        onClick={search}>
                        Search
                    </StyledButton>
                </div> */}
                <StyledLink to="/notes/new">
                    <StyledButton primary>New note</StyledButton>
                </StyledLink>
                <h4>Notes List</h4>
                <ResponsiveDrawer allowScroll={true}>
                        {
                            notes && notes.map((note, notei) => <NoteListItem key={notei} isSelected={notei === currentIndex} note={note} onClick={() => setActiveNote(note, notei)}/>)
                        }
                </ResponsiveDrawer>
                <div>
                    {currentNote ? (
                        <div>
                            <h4>Note</h4>
                            {
                                currentNote.fields && currentNote.fields.map((field, fi) =>
                                    <div key={fi}>
                                        <label>
                                            <strong>Field {fi + 1}</strong>
                                        </label>
                                        {": " + field}
                                    </div>
                                )
                            }
                            <div>
                                <label>
                                    <strong>Tags</strong>
                                </label>
                                {": " + currentNote.tags.join(', ')}
                            </div>
                            <div>
                                <label>
                                    <strong>Source</strong>
                                </label>
                                {": " + currentNote.source.title}
                            </div>
                            <div>
                                <label>
                                    <strong>ID</strong>
                                </label>
                                {": " + currentNote._id}
                            </div>
                            <Link to={'/notes/' + currentNote._id}
                                className="badge badge-warning">
                                Edit
                            </Link>
                            <div>
                                {/* {currentNote && currentNote.cards.map(card =>
                                    " " + card.id
                                )} */}
                                {/* <button>Get Cards</button>
                                <ul>
                                    {currentNote && currentNote.cards ? CardService.getCards(currentNote.cards.map(card => card.id)).then(res => res.map(rcard => {
                                        <li key={rcard.id}><strong>{rcard.id}</strong>{JSON.stringify(rcard.fields)}</li>
                                    })) : ''}
                                </ul> */}
                            </div>
                        </div>
                    ) : <div>
                        <br />
                        <p>Please select a note to view.</p>
                    </div>
                    }
                </div>
            </div>
        </>
    );
}