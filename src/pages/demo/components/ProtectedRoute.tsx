import React, { createContext, useContext, useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { AccountService } from "../services/AccountService";
import { IAuthContext } from "../types/IAuthContext";
import { ILoginRequest } from "../types/ILoginRequest";
import { IUser } from "../types/IUser";

const authContext = createContext<IAuthContext>({signin: ()=>{}, signout: ()=>{}});

export const ProvideAuth: React.FC<{}> = ({ children }) => {
    const auth = useProvideAuth();
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
    const signin = (loginRequest: ILoginRequest, signedIn: () => void) => {
        return AccountService.login(loginRequest)
            .then((res) => {
                setUser(res);
                signedIn();
            });
    };
    const signout = (signedOut: () => void) => {
        return AccountService.logout()
            .then((res) => {
                setUser(undefined);
                signedOut();
            })
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
                                pathname: "/demo/login",
                                state: { from: location }
                            }}
                        />
                    </>

                )}
        />
    )
}