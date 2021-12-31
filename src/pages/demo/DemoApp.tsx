import { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import DemoHome from "./pages/DemoHome";
import NotesPage from "./pages/notes/NotesPage";
import QuizPage from "./pages/quiz/QuizPage";
import { INote } from "./types/INote";
import AccountPage from "./pages/account/AccountPage";
import { ProtectedRoute, ProvideAuth } from "./components/ProtectedRoute";
import LoginPage from "./pages/account/LoginPage";
import styled, { ThemeProvider } from "styled-components";
import RegistrationPage from "./pages/account/RegistrationPage";
import { NotePage } from "./pages/notes/components/NotePage";
import RegistrationConfirmationPage from "./pages/account/RegistrationConfirmationPage";

const AppStyle = styled.div`
padding: 48px 128px;
color: ${props => props.theme.normalFontColor};
font-size: ${props => props.theme.normalFontSize};
`;

const theme = {
    normalFontColor: 'palevioletred',//'#FCECB6',
    normalFontSize: '24pt'
}

export default () => {
    const [notes, setNotes] = useState<Array<INote>>([]);

    // useEffect(() => {
    //     NoteService.getNotes().then(response => { setNotes(response) });
    // }, [user]);

    return (
        <AppStyle>
            <ThemeProvider theme={theme}>
                <ProvideAuth>
                    <Switch>
                        <ProtectedRoute path="/demo/quiz">
                            <QuizPage />
                        </ProtectedRoute>
                        <ProtectedRoute path="/demo/notes/:id" >
                            <NotePage />
                        </ProtectedRoute>
                        <ProtectedRoute path="/demo/notes">
                            <NotesPage />
                        </ProtectedRoute>
                        <Route path="/demo/login">
                            <LoginPage />
                        </Route>
                        <Route path="/demo/register/confirmation">
                            <RegistrationConfirmationPage />
                        </Route>
                        <Route path="/demo/register">
                            <RegistrationPage />
                        </Route>
                        <ProtectedRoute path="/demo/account">
                            <AccountPage />
                        </ProtectedRoute>
                        <ProtectedRoute path="/demo/protected">
                            <div>PROTECTED</div>
                        </ProtectedRoute>
                        <Route path="/demo">
                            <DemoHome />
                        </Route>
                    </Switch>
                </ProvideAuth>
            </ThemeProvider>
        </AppStyle>
    );
};