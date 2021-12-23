import { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { api } from "../../http-common";
import DemoHome from "./pages/DemoHome";
import NotesPage from "./pages/notes/NotesPage";
import { AccountService } from "./services/AccountService";
import "bootstrap/dist/css/bootstrap.min.css";
import NotePage from "./pages/notes/components/NotePage";
import QuizPage from "./pages/quiz/QuizPage";
import { INote } from "./types/INote";
import { NoteService } from "./services/NoteService";
import { IUser } from "./types/IUser";
import { ILoginResponse } from "./types/ILoginResponse";
import AccountPage from "./pages/account/AccountPage";
import { ProtectedRoute, ProvideAuth } from "./components/ProtectedRoute";
import LoginPage from "./pages/account/LoginPage";

export default () => {
    const [notes, setNotes] = useState<Array<INote>>([]);

    // useEffect(() => {
    //     NoteService.getNotes().then(response => { setNotes(response) });
    // }, [user]);

    return (
        <>
            <ProvideAuth>
                <Switch>
                    <Route path="/demo/quiz">
                        <QuizPage />
                    </Route>
                    <Route path="/demo/notes/:id" component={NotePage} />
                    <Route path="/demo/notes">
                        <NotesPage />
                    </Route>
                    <Route path="/demo/login">
                        <LoginPage />
                    </Route>
                    <ProtectedRoute path="/demo/account">
                        <AccountPage/>
                    </ProtectedRoute>
                    <ProtectedRoute path="/demo/protected">
                        <div>PROTECTED</div>
                    </ProtectedRoute>
                    <Route path="/demo">
                        <DemoHome />
                    </Route>
                </Switch>
            </ProvideAuth>
        </>
    );
};