import React, { useEffect } from "react";
import { useState } from "react"
import { useAuth } from "../../components/ProtectedRoute";
import { IUser } from "../../types/IUser";
import styled from "styled-components";
import DateView from "../../components/DateView";
import Button from "@restart/ui/esm/Button";
import { useHistory } from "react-router";

interface IAccountPageProps {
}

export default (props: IAccountPageProps) => {
    const [cachedUser, setCachedUser] = useState<IUser>();
    const [lastLogin, setLastLogin] = useState<string>();

    let history = useHistory();
    let auth = useAuth();

    useEffect(() => {
        setCachedUser(auth.user)

    }, [auth.user]);
    useEffect(() => {
        let daysAgo = (Date.now() - (cachedUser?.last_login?.valueOf() || 1)) / 86400000;
        setLastLogin(daysAgo < 1 ? 'Today' : (
            daysAgo < 2 ? 'Yesterday' :
                `${daysAgo.toFixed(0)} days ago`
        ));
    }, [cachedUser?.last_login]);

    let logout = () => {
        auth.signout(() => {
            history.push('/demo/login');
        });
    };

    return (
        <>
            {cachedUser ? (
                <>
                    {JSON.stringify(cachedUser)}
                    <h1>{cachedUser.name}</h1>
                    <div>{cachedUser.name[0]}</div>
                    <h2>{cachedUser.email}</h2>
                    <div title={cachedUser.last_login.toLocaleString()}>Last login: <DateView>{lastLogin}</DateView></div>
                    {cachedUser.loggedIn ? <div>Logged in</div> : ''}
                    {!cachedUser.is_activated ?
                        <div>
                            Email address not verified for this account
                        </div>
                        : ''}
                    <Button onClick={() => logout()}>Sign out</Button>
                </>
            ) : 'No user logged in'}
        </>
    );
}