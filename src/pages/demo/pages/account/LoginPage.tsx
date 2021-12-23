import React, { useEffect } from "react"
import { useHistory, useLocation } from "react-router"
import { useAuth } from "../../components/ProtectedRoute";
import ILocationState from "../../types/ILocationState";
import { ILoginRequest } from "../../types/ILoginRequest";

export default () => {
    let history = useHistory();
    let location = useLocation<ILocationState>();
    let auth = useAuth();

    let { from } = location.state || { from : { pathname: '/' }};
    let login = (loginRequest: ILoginRequest) => {
        auth.signin(loginRequest, () => {
            history.replace(from);
        });
    };

    useEffect(() => {
        if (auth.user) {
            history.replace(from);
        }
    })

    return (
        <>
        AUTH: {JSON.stringify(auth)}<br/>
            LOG IN to view protected page "{from.pathname}"<br/>
            <button onClick={() => login({email: "tiarnachreidy@gmail.com", password: "WatchEOFISMate", rememberMe: true})}>
                LOG IN
            </button>
        </>
    )
}