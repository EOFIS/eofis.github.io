import React, { FormEvent, FormEventHandler, useEffect, useState } from "react"
import { useHistory, useLocation } from "react-router"
import { useAuth } from "../../components/ProtectedRoute";
import ILocationState from "../../types/ILocationState";
import { ILoginRequest } from "../../types/ILoginRequest";
import { useForm, SubmitHandler } from "react-hook-form";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { ErrorWrapper } from "../../components/ErrorWrapper";
import styled from "styled-components";

const LoginPageStyle = styled.div`
background: #771527;
// padding: 48px 128px;
color: #FCECB6;
`;
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

    const onLoginSubmit: SubmitHandler<ILoginRequest> = (data: ILoginRequest) => login(data);

    useEffect(() => {
        if (auth.user) {
            history.replace(from);
        }
    }, []);

    return (
        <LoginPageStyle>
            <h1>Log in to your account</h1>
            <h3>Let's get revising!</h3>
            <Form onSubmit={handleSubmit(onLoginSubmit)}>
                {errorMessages.length > 0 ?
                    <ErrorWrapper>
                        {errorMessages.map((value, index, array) =>
                            <li key={index}>{value}</li>
                        )}
                    </ErrorWrapper>
                    : ''}
                <Input type="email" placeholder="Email" {...register("email", { required: 'An email is required' })} />
                <Input type="password" placeholder="Password" {...register("password", { required: 'Please enter your password' })} />

                <Input type="submit" value="Log in" />

                {/* <Input type="checkbox" placeholder="Remember Me" {...register("rememberMe", { required: false })} /> */}
            </Form>
        </LoginPageStyle>
    )
}
