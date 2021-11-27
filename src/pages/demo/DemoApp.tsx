import { AxiosError } from "axios";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { api } from "../../http-common";
import DemoHome from "./pages/DemoHome";
import NotesPage from "./pages/notes/NotesPage";
import { AuthService } from "./services/AuthService";
import "bootstrap/dist/css/bootstrap.min.css";
import NotePage from "./pages/notes/components/NotePage";
import QuizPage from "./pages/quiz/QuizPage";

export default class Demo extends React.Component {
    componentDidMount() {
        api.interceptors.response.use(response => {
            return response;
        }, (error: AxiosError<any>) => {
            if (error.response?.status === 401) {
                AuthService.login({email: "tiarnachreidy@gmail.com", password: "WatchEOFISMate", rememberMe: true});
                // AuthService.logout().then(res => {
                //     window.location.replace("/signOut");
                // });
            } else if (error.response?.status === 500) {
                throw error.response.data["message"];
            }
            return error;
        })
    }
    render() {
        return (
            <>
            <Switch>
                <Route path="/demo/quiz">
                    <QuizPage/>
                </Route>
                <Route path="/demo/notes/:id" component={NotePage}/>
                <Route path="/demo/notes">
                    <NotesPage/>
                </Route>
                <Route path="/demo">
                    <DemoHome/>
                </Route>
            </Switch>
            </>
        );
    }
};