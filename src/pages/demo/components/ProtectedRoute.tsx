import React, { createContext, useContext, useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { AccountService } from "../services/AccountService";
import { LOCAL_STORAGE } from "../types/Constants";
import { IAuthContext } from "../types/IAuthContext";
import { ILoginRequest } from "../types/ILoginRequest";
import { IUser, IUserLocalStorage, User } from "../types/IUser";

const authContext = createContext<IAuthContext>({signin: ()=>{}, signout: ()=>{}});

export const ProvideAuth: React.FC<{}> = ({ children }) => {
    const auth = useProvideAuth();
    useEffect(() => {
        const loggedInUser : string|null = localStorage.getItem(LOCAL_STORAGE.USER);
        console.log(`May load user from local storage: ${loggedInUser}`);
        if (loggedInUser != null) {
            console.log(`Loading user ${loggedInUser}`);
            auth.user = User.from_localstorage(loggedInUser);
            console.log(`Logged in user set: ${auth.user}`);
        }
    },[]);
    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    );
};
export function useAuth() {
    let context = useContext(authContext);
    return context;
};

const useProvideAuth = (): IAuthContext => {
    const [user, setUser] = useState<IUser | undefined>(undefined);
    const signin = async (loginRequest: ILoginRequest, signedIn: () => void) => {
        const res = await AccountService.login(loginRequest);
        setUser(res);
        localStorage.setItem(LOCAL_STORAGE.USER, res.to_localstorage())
        signedIn();
    };
    const signout = async (signedOut: () => void) => {
        const res = await AccountService.logout();
        localStorage.removeItem(LOCAL_STORAGE.USER)
        setUser(undefined);
        signedOut();
    };
    return {
        user,
        signin,
        signout
    };
};
export const ProtectedRoute: React.FC<{ path: string }> = ({ children, ...rest }) => {
    let auth = useAuth();
    // useEffect(() => {
    //     const loggedInUser : string|null = localStorage.getItem(LOCAL_STORAGE.USER);
    //     console.log(`May load user from local storage in ProtectedRoute: ${loggedInUser}`);
    //     if (loggedInUser != null) {
    //         console.log(`Loading user in ProtectedRoute ${loggedInUser}`);
    //         auth.user = User.from_localstorage(loggedInUser);
    //         console.log(`Logged in user set in ProtectedRoute: ${auth.user}`);
    //     }
    // });
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.user ? (
                    children
                ) : (
                    <>
                        <Redirect
                            to={{
                                pathname: "/demo/login",
                                state: { from: location }
                            }}
                        />
                    </>

                )}
        />
    )
}