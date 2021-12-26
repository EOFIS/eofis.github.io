import React from "react";
import styled from "styled-components";

const InputStyle = styled.div`
position: relative;
margin-bottom: 16px;
background: none;

span {
    position: absolute;
    padding: 0 0 0 6px;
    color: #c2c2c2;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
`;

interface IInputProps{
    type?: string;
    icon?: string;
    placeholder?: string;
    onChange?: (e?: any) => {};
    value?: string | number;
    name?: string;
    autoComplete?: string;
}
export const Input = (props: IInputProps) => {
    return (
        <InputStyle>
            {props.icon && 
                <span>
                    {props.icon}
                </span>}
            <input
                name={props.name}
                type={props.type}
                autoComplete={props.autoComplete}
                placeholder={props.placeholder}
                onChange={props.onChange}
                value={props.value}
            />
        </InputStyle>
    )
}