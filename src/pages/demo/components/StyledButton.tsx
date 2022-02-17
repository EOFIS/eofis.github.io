import styled from "styled-components";

interface IButtonProps {
    readonly primary?: boolean;
    readonly enabled?: boolean;
}

const StyledButton = styled.button<IButtonProps>`
    background: ${props => props.primary ? props.theme.colour.bg.layer4 : props.theme.colour.bg.layer3};
    color: ${props => props.primary ? props.theme.font.colour.layer4 : props.theme.font.colour.layer3};
    margin: 1em;
    padding: 0.25em 1em;
    user-select: none;
    font-weight: bold;
    text-align: center;
    border: 2px solid ${props => props.theme.colour.bg.layer4};
    border-radius: 3px;
    cursor: ${props => props.enabled? 'pointer' : 'not-allowed'};
`;
export default StyledButton;