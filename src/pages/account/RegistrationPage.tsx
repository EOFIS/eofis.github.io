import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from "react-router"
import { useAuth } from "../../components/ProtectedRoute";
import ILocationState from "../../types/ILocationState";
import { ILoginRequest } from "../../types/ILoginRequest";
import { useForm, SubmitHandler } from "react-hook-form";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { ErrorWrapper } from "../../components/ErrorWrapper";
import styled from "styled-components";
import { IRegistrationRequest } from '../../types/IRegistrationRequest';
import { AccountService } from '../../services/AccountService';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const RegistrationPageStyle = styled.div`
`;

interface IRegistrationFormInputs {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const schema = yup.object({
  name: yup.string().required("Please enter a display name"),
  email: yup.string().email("Please enter a valid email").required("An email is required"),
  password: yup.string().min(8, 'Password must be at least 8 characters long'),
  confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match')
});

export default function RegistrationPage() {
  let history = useHistory();
  let location = useLocation<ILocationState>();
  let auth = useAuth();

  let [errorMessages, setErrorMessages] = useState<Array<string>>([]);

  const { register, handleSubmit, formState: { errors }, formState, getValues, setError } = useForm<IRegistrationFormInputs>({
    resolver: yupResolver(schema)
  });

  let { from } = location.state || { from: { pathname: '/' } };
  let signup = (registerRequest: IRegistrationRequest) => {
    setErrorMessages([]);
    AccountService.register(registerRequest)
      .then(() => {
        history.push(`/register?registered=true`);
      }, (messages) => {
        setErrorMessages(messages);
      });
  };

  const onSubmit: SubmitHandler<IRegistrationRequest> = (data) => signup(data);

  useEffect(() => {
    if (auth.user) {
      history.replace(from);
    }
  }, []);

  useEffect(() => {
    const [ password, confirmPassword ] = getValues(['password', 'confirmPassword']);
    if (password !== confirmPassword) {
      setError('confirmPassword', {
        type: 'validate',
        message: "Passwords don't match"
      }, { shouldFocus: false});
    } 
  },[formState]);

  return (
    <RegistrationPageStyle>
      <h1>Register</h1>
      <h3>Let's get revising!</h3>
      <Form inset onSubmit={handleSubmit(onSubmit)}>
        {errorMessages.length > 0 ?
          <ErrorWrapper>
            {errorMessages.map((value, index, array) =>
              <li key={index}>{value}</li>
            )}
          </ErrorWrapper>
          : ''}
        <Input type="text" placeholder="Name" {...register("name")} />
        {errors.name?.message}
        <Input type="email" placeholder="Email" {...register("email")} />
        {errors.email?.message}
        <Input type="password" placeholder="Password" {...register("password")} />
        {errors.password?.message}
        <Input type="password" placeholder="Confirm Password" {...register("confirmPassword")} />
        {errors.confirmPassword?.message}

        <Input type="submit" value="Register" />
      </Form>
    </RegistrationPageStyle>
  );
};