import React, { useEffect } from "react";
import { useState } from "react"
import { useAuth } from "../../components/ProtectedRoute";
import { IUser } from "../../types/IUser";
import DateView from "../../components/DateView";
import { useHistory } from "react-router";
import StyledButton from "../../components/StyledButton";
import { InsetContainer } from "../../components/InsetContainer";

interface IAccountPageProps {
}

export default (props: IAccountPageProps) => {
    const [cachedUser, setCachedUser] = useState<IUser>();
    const [lastLogin, setLastLogin] = useState<string>();
    const [errorMessages, setErrorMessages] = useState<Array<string>>([]);

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
        setErrorMessages([]);
        auth.signout(() => {
            history.push('/demo/login');
        }, (messages) => {
            setErrorMessages(messages);
        });
    };

    return (
        <>
            <InsetContainer>
                {cachedUser ? (
                    <>
                        <h1>{cachedUser.name}</h1>
                        <img src="../profile-128.png" />
                        <h2>{cachedUser.email}</h2>
                        <div title={cachedUser.last_login.toLocaleString()}>Last login: <DateView>{lastLogin}</DateView></div>
                        {cachedUser.loggedIn ? <div>Logged in</div> : ''}
                        {!cachedUser.is_activated ?
                            <div>
                                Email address not verified for this account
                            </div>
                            : ''}
                    </>
                ) : 'No user logged in'}
            </InsetContainer>
            <StyledButton onClick={() => logout()}>Sign out</StyledButton>
        </>
    );
}