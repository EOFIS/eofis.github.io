import styled from "styled-components";
import React from "react";
import { InsetContainer } from "./InsetContainer";

interface IFormProps {
}

const FormStyle = styled.form`

color: ${props => props.theme.font.colour.layer1.normal};

hr {
    border: 1px solid;
}
`;

export const Form: React.FC<IFormProps & React.HTMLProps<HTMLFormElement>> = ({ children, onSubmit, ...props }) => {
    return <InsetContainer>
        <div className="container">
            <FormStyle onSubmit={onSubmit}>
                {children}
            </FormStyle>
        </div>
    </InsetContainer>
}
