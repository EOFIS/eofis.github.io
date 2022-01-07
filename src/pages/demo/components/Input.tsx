import React from "react";
import { FieldError } from "react-hook-form";
import styled from "styled-components";
import { ErrorWrapper } from "./ErrorWrapper";

const InputStyle = styled.div`
display: inline-block;
width: 100%;
margin-top: 24px;

label {
    display: block;
    text-align: left;
    line-height: 1.5;
    font-size: clamp(1.0125rem, 1.25vm, 1.125rem);
    margin-bottom: 4px;
}

input {
    color: #FCECB6;
    background: none;
    width: 100%;
    height: 48px;
    padding-left: 16px;
    font-size: 0.875rem;
    line-height: 1.4rem;

    &.error {
        background: white;
    }

    &[type='text'], &[type='password'], &[type='email'] {
        border: none;
        border-bottom: 2px solid #FCECB6;
        transition: border-color 0.3s ease-in-out;
        transition: color 0.3s ease-in-out;

        &::placeholder {
            font-weight: bold;
        }
        &:focus, &:hover, &.error {
            outline: none;
            border-bottom: 2px solid #ff4906;
            color: #ff4906;
        }
    }

    &[type='submit'] {
        border: none;
        border-radius: 24px;
        height: 48px;
        color: white;
        background: #ff4906;
        padding: 4px;
        width: 100%;
        font-weight: bold;
        &:hover {
            background: #df3e02;
        }
    }
}

`;

interface IInputProps extends React.HTMLProps<HTMLInputElement>{
    type?: string;
    placeholder?: string;
    title?: string;
    labeltext?: string;
    onChange?: (e?: any) => void;
    value?: string | number;
    name?: string;
    autoComplete?: string;
    error?: FieldError;
    // onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void | null;
}
export const Input: React.FC<IInputProps> = React.forwardRef(({ ...props }, ref) => {
    return (
        <InputStyle>
            {
                props.labeltext ?
                    <label htmlFor={props.name}>
                        {props.labeltext}
                    </label>
                    : ( props.value?.toString().length || (ref) ) && props.placeholder ? 
                    <label htmlFor={props.name}>
                        {props.placeholder}
                    </label>
                    : ''
            }
            {
                props.type === 'select' ?
                    <select
                        ref={ref}
                        {...props}>
                        {props.children}
                    </select>
                    :
                    <input
                        className={props.error ? 'error' : ''}
                        ref={ref}
                        {...props}
                    />

            }

            {props.error?.message &&
                <ErrorWrapper>
                    {props.error?.message}
                </ErrorWrapper>}
        </InputStyle>
    )
})