import React from "react";
import styled from "styled-components";
 
export const InsetContainer= styled.div`
padding: 48px 128px;
margin: 0 auto;
& > * {
    background: ${props => props.theme.colour.bg.layer1};
}
`;
