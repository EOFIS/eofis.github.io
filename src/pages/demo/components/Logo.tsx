import React from "react";
import styled from "styled-components";

interface IBWLogoStyleProps {
}
const BWLogoStyle = styled.div<IBWLogoStyleProps>`
background: ${props => props.theme.font.colour.layer0.normal};
&.switched { background: ${props => props.theme.colour.bg.layer0};}
mask: url("logo-bw.svg") ;
mask-size: cover;
width: clamp(100px, 40vh, 400px);
height: clamp(100px, 40vh, 400px);
border-radius: 50%;
cursor: pointer;
`;
const LogoStyle = styled.img`
width: clamp(100px, 40vh, 400px);
height: clamp(100px, 40vh, 400px);
display: block;
`;
const BGSVGStyle = styled.svg`
.logoBgCircleLeft {
    fill: ${props => props.theme.font.colour.layer0.normal};
    &.switched { fill: ${props => props.theme.colour.bg.layer0};}
    }
.logoBgCircleRight {
    fill: ${props => props.theme.colour.bg.layer0};
    &.switched { fill: ${props => props.theme.font.colour.layer0.normal};}
}
`;

export interface ILogoProps {
    monochrome?: boolean;
    circle?: boolean;
    switched?: boolean;
}
export const Logo: React.FC<ILogoProps & React.HTMLProps<HTMLDivElement>> = ({ ...props }) => {
    return props.monochrome ?
        props.circle ?
            <BGSVGStyle width='clamp(100px, 40vh, 400px)' height='clamp(100px, 40vh, 400px)'>
                <clipPath id="cropLeft">
                    <rect x="0" y="0" width="clamp(50px, 20vh, 200px)" height="clamp(100px, 40vh, 400px)" />
                </clipPath>
                <circle r='clamp(50px, 20vh, 200px)' cx='clamp(50px, 20vh, 200px)' cy='clamp(50px, 20vh, 200px)'
                    className={`logoBgCircleRight ${props.switched && 'switched'}`}
                />
                <circle r='clamp(50px, 20vh, 200px)' cx='clamp(50px, 20vh, 200px)' cy='clamp(50px, 20vh, 200px)'
                    className={`logoBgCircleLeft ${props.switched && 'switched'}`}
                    clipPath="url('#cropLeft')"
                />

                <foreignObject width='clamp(100px, 40vh, 400px)' height='clamp(100px, 40vh, 400px)'>
                    <BWLogoStyle style={props.style} className={props.switched ? 'switched' : ''} />
                </foreignObject>
            </BGSVGStyle>
            :
            <BWLogoStyle style={props.style} className={props.switched ? 'switched' : ''} />
        : props.circle ?
            <BGSVGStyle width='clamp(100px, 40vh, 400px)' height='clamp(100px, 40vh, 400px)'>
                <clipPath id="cropLeft">
                    <rect x="0" y="0" width="clamp(50px, 20vh, 200px)" height="clamp(100px, 40vh, 400px)" />
                </clipPath>
                <circle r='clamp(50px, 20vh, 200px)' cx='clamp(50px, 20vh, 200px)' cy='clamp(50px, 20vh, 200px)'
                    className={`logoBgCircleRight ${props.switched && 'switched'}`}
                />
                <circle r='clamp(50px, 20vh, 200px)' cx='clamp(50px, 20vh, 200px)' cy='clamp(50px, 20vh, 200px)'
                    className={`logoBgCircleLeft ${props.switched && 'switched'}`}
                    clipPath="url('#cropLeft')"
                />

                <foreignObject width='clamp(100px, 40vh, 400px)' height='clamp(100px, 40vh, 400px)'>
                    <LogoStyle src="logo.svg" 
                        style={props.style} className={props.switched ? 'switched' : ''} />
                </foreignObject>
            </BGSVGStyle>
            :
            <LogoStyle src="logo.svg" />
}