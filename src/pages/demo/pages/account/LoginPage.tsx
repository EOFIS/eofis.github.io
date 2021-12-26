import React, { FormEvent, FormEventHandler, useEffect, useState } from "react"
import { useHistory, useLocation } from "react-router"
import { useAuth } from "../../components/ProtectedRoute";
import ILocationState from "../../types/ILocationState";
import { ILoginRequest } from "../../types/ILoginRequest";
import { useForm, SubmitHandler } from "react-hook-form";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";

export default function LoginPage() {
    let history = useHistory();
    let location = useLocation<ILocationState>();
    let auth = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();

    let [errorMessages, setErrorMessages] = useState<Array<string>>([]);

    let { from } = location.state || { from: { pathname: '/' } };
    let login = (loginRequest: ILoginRequest) => {
        setErrorMessages([]);
        auth.signin(loginRequest, () => {
            history.replace(from);
        }, (messages) => {
            setErrorMessages(messages);
        });
    };
    // data: ILoginRequest
    const onLoginSubmit: SubmitHandler<ILoginRequest> = (data: ILoginRequest) => login(data);

    useEffect(() => {
        if (auth.user) {
            history.replace(from);
        }
    }, []);

    return (
        <>
            LOG IN to view protected page "{from.pathname}"<br />


            <form onSubmit={handleSubmit(onLoginSubmit)}>
                <input type="email" placeholder="Email" {...register("email", { required: 'An email is required' })} />
                <input type="password" placeholder="Password" {...register("password", { required: 'Please enter your password' })} />
                <input type="checkbox" placeholder="Remember Me" {...register("rememberMe", { required: false })} />

                <input type="submit" />

                {errorMessages.length > 0?
                    <ul>
                        {errorMessages.map((value, index, array) => 
                            <li key={index}>{value}</li>
                        )}
                    </ul>
                    : JSON.stringify(errorMessages)}
            </form>

            <button onClick={() => login({ email: "tiarnachreidy@gmail.com", password: "WatchEOFISMate", rememberMe: true })}>
                LOG IN
            </button>
        </>
    )
}
