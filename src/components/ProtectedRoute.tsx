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
        if (loggedInUser != null) {
            auth.user = User.from_localstorage(loggedInUser);
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

    const signin = async (loginRequest: ILoginRequest, signedIn: () => void, error: (messages: Array<string>) => void) => {
        AccountService.login(loginRequest)
        .then(
            (value: User) => {
                setUser(value);
                localStorage.setItem(LOCAL_STORAGE.USER, value.to_localstorage())
                signedIn();
            },
            (reason: Array<string>) => {
                error(reason);
            });
    };
    const signout = async (signedOut: () => void, error: (messages: Array<string>) => void) => {
        AccountService.logout()
        .then((value: boolean) => {
            if (value === true) {
                localStorage.removeItem(LOCAL_STORAGE.USER);
                setUser(undefined);
                signedOut();
            } else {
                error(['Error signing out']);
            }
        }, (reason: Array<string>) => {
            error(reason);
        });
    };
    return {
        user,
        signin,
        signout
    };
};
export const ProtectedRoute: React.FC<{ path: string }> = ({ children, ...rest }) => {
    let auth = useAuth();
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
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    </>

                )}
        />
    )
}