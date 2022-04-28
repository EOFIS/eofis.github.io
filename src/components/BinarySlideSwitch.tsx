import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface BinarySlideSwitchStyleProps {
    switched: boolean;
}
const BinarySlideSwitchStyle = styled.label<BinarySlideSwitchStyleProps>`
& > div {
    position: relative;
    display: inline-block;
    width: 3.5em;
    height: 2em;
}
& > div > input {
    opacity: 0;
    width: 0;
    height: 0;
}
& > div > input:checked + span {
    background-color: ${props => props.theme.colour.bg.layer0};
    &:before {
        background-color: ${props => props.theme.font.colour.layer0.normal};
    }
}
& > div > input:focus + span {
    box-shadow: 0 0 1px #2196F3;
}
& > div > input:checked + span:before {
    transform: translateX(1.5em);
}

& > div > span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props => props.theme.font.colour.layer0.normal};
    transition: .4s;
    &:before {
        position: absolute;
        content: "";
        height: 1.5em;
        width: 1.5em;
        left: 0.25em;
        bottom: 0.25em;
        background-color: ${props => props.theme.colour.bg.layer0};
        transition: .4s;
    }
}

&>label {
    margin-left: .5em;
    vertical-align: bottom;
    font-size: 20pt;
    font-weight: bold;
    color: ${props => props.switched ? props.theme.font.colour.layer0.normal : props.theme.colour.bg.layer0};
}
`;

interface RangeOption { display: string, code: string };
export interface IBinarySlideSwitchProps {
    options: Array<RangeOption>;
}
export const BinarySlideSwitch: React.FC<IBinarySlideSwitchProps & React.HTMLProps<HTMLInputElement>> = ({ options, ...props }) => {
    const [on, setOn] = useState<boolean>(false);
    
    return <BinarySlideSwitchStyle style={props.style} switched={on}>
        <div>
            <input name="check" type="checkbox" onChange={(e) => {
                setOn(e.currentTarget.checked);
                if (props.onChange) props.onChange(e);
            }}/>
            <span></span>
        </div>
        <label>{options[on ? 1 : 0].display}</label>
    </BinarySlideSwitchStyle>
}