import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { NoteService } from "../services/NoteService";
import { INote } from "../types/INote";

export default () => {

    return (
        <>
            <h1>Demo coming soon!</h1>
            <p>Please check back soon, this will contain our demo.</p>
            <Link to="/demo/quiz">Today's Quiz</Link> <br />
            <Link to="/demo/notes">All your notes</Link> <br />
            <Link to="/demo/account">Account</Link> <br/>
            <Button primary>Test button</Button>
        </>
    )
}
