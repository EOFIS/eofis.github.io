import React, { createContext, useContext, useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { AccountService } from "../services/AccountService";
import { IAuthContext } from "../types/IAuthContext";
import { ILoginRequest } from "../types/ILoginRequest";
import IUser from "../types/IUser";

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
    console.log(`USE AUTH: ${JSON.stringify(context)}`);
    return context;
};

const useProvideAuth = (): IAuthContext => {
    const [user, setUser] = useState<IUser | undefined>(undefined);
    console.log(`useProvideAuth: user: ${user}`);
    const signin = (loginRequest: ILoginRequest, signedIn: () => void) => {
        console.log(`useProvideAuth.signin: loginRequest: ${JSON.stringify(loginRequest)}; signedIn: ${signedIn}`);
        return AccountService.login(loginRequest)
            .then((res) => {
                console.log(`useProvideAuth.signin (after AccountService.login): USER: ${JSON.stringify(res.user)}; ERROR: ${JSON.stringify(res.errorMessage)}`);
                setUser(res.user);
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
    useEffect(() => {
        console.log(`ProtectedRoute: ${rest.path} | AUTH: ${JSON.stringify(auth)} | children: `);
        console.log(children);
    })
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.user ? (
                    children
                ) : (
                    <>
                        {console.log("LOGIN")}
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