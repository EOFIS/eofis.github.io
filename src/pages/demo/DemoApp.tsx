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
    const [user, setUser] = useState<IUser | undefined>(undefined);
    const [notes, setNotes] = useState<Array<INote>>([]);

    useEffect(() => {
        // api.interceptors.response.use(response => {
        //     return response;
        // }, (error: AxiosError<any>) => {
        //     if (error.response?.status === 401) {
        //         if (user === undefined) {
        //             AccountService
        //                 .login({ email: "tiarnachreidy@gmail.com", password: "WatchEOFISMate", rememberMe: true })
        //                 .then((result: ILoginResponse) => {
        //                     setUser(result.user);
        //                 })
        //                 .catch((reason: any) => {
        //                     console.log(`LOGIN REQUEST REJECTED IN DemoApp.tsx: ${JSON.stringify(reason)}`)
        //                 })
        //             // AuthService.logout().then(res => {
        //             //     window.location.replace("/signOut");
        //             // });
        //         } else {
        //             // This user is not permitted to access this content somehow
        //             throw error;
        //         }
        //     } else if (error.response?.status === 500) {
        //         throw error.response.data["message"];
        //     }
        //     return error;
        // })
    })

    // useEffect(() => {
    //     NoteService.getNotes().then(response => { setNotes(response) });
    // }, [user]);

    return (
        <>
            {/* <UserContext.Provider value={user}> */}
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
            {/* </UserContext.Provider> */}
        </>
    );
};