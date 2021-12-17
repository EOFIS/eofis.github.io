import styled from "styled-components";

interface IButtonProps {
    readonly primary?: boolean;
}

const Button = styled.button<IButtonProps>`
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;
export default Button;