import styled from "styled-components";

interface IErrorWrapperProps {
}

export const ErrorWrapper = styled.ul<IErrorWrapperProps>`
background: #FDF8E7;
color: #9A0E28;
line-height: 1.5;
font-size: clamp(1.0125rem, 1.25vw, 1.125rem);
text-align: left;
font-weight: bold;
padding: 4px 4px 4px 16px;
border-radius: 24px;

li {
    list-style: none;
    padding: 0px;
    margin: 0px;
}
`;
