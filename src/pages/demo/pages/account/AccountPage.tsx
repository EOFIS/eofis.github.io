import React, { useEffect } from "react";
import { useState } from "react"
import { useAuth } from "../../components/ProtectedRoute";
import IUser from "../../types/IUser";

interface IAccountPageProps {
    user?: IUser;
}

export default (props: IAccountPageProps) => {
    const [cachedUser, setCachedUser] = useState<IUser>();

    let auth = useAuth();

    useEffect(() => {
        setCachedUser(auth.user)
    }, [auth.user]);

    return (
        <>
            {cachedUser ? (
                <>
                    {JSON.stringify(cachedUser)}
                    <h1>{cachedUser.name}</h1>
                    <div>{cachedUser.name[0]}</div>
                    <h2>{cachedUser.email}</h2>

                </>
            ) : 'No user logged in'}
        </>
    );
}