import React from "react";
import styled from "styled-components";

interface IBWLogoStyleProps {
}
const BWLogoStyle = styled.div<IBWLogoStyleProps>`
background: ${props => props.theme.font.colour.layer0.normal};
&.switched { background: ${props => props.theme.colour.bg.layer0};}
mask: url("logo-bw.svg") ;
mask-size: cover;
width: 400px;
height: 400px;
border-radius: 50%;
cursor: pointer;
`;
const LogoStyle = styled.img`
width: 200px;
height: 200px;
display: block;
`;

export interface ILogoProps {
    monochrome?: boolean;
    switched?: boolean;
}
export const Logo: React.FC<ILogoProps & React.HTMLProps<HTMLDivElement>> = ({ ...props }) => {
    return props.monochrome ? 
    <BWLogoStyle style={props.style} className={props.switched ? 'switched' : ''}/> : 
    // <img style={{background: 'red'}} src="logo-bw.svg"/> :
    <LogoStyle src="logo.svg"/>
}