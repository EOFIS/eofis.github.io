import React, { ReactElement } from "react";
import { useState } from "react";
import styled from "styled-components";

export interface ISideDrawerProps {
    open: boolean;
    width: number;
    allowScroll?: boolean;
}
export const SideDrawer = styled.div<ISideDrawerProps>`
top: 0;
height: 100vh;
float: left;
background: ${props => props.theme.colour.bg.layer0};
color: ${props => props.theme.font.colour.layer0.normal};
position: relative;
flex-direction: column;
z-index: 1;
overflow-y: scroll;

ul.content-wrapper {
    padding: 0;
    margin: 0;
    display: ${props => props.open ? 'block' : 'none'};
    width: ${props => props.width}px;
}
`;

const Section = styled.li<{}>`
&[hidden] {
    display: none;
}
overflow-x: hidden;
padding: 4px;
user-select: none;
display: block;

h2 {
    font-size: ${props => props.theme.font.size.large};
}
& > ul {
    padding: 0;
    margin: 0;
}
`;

interface IDraggerProps {
    drawerOpen: boolean;
}
const Dragger = styled.div<IDraggerProps>`
width: 5px;
cursor: ew-resize;
float: right;
display: flex;
top: 0;
left: 0;
bottom: 0;
height: 100%;
z-index: 100;
background-color: ${props => props.drawerOpen ? props.theme.colour.bg.layer2 : props.theme.colour.bg.layer1}; // Slightly darker than SideDrawer when open, slightly darker than background when closed

&:hover {
    background-color: ${props => props.drawerOpen ? props.theme.colour.bg.layer1 : props.theme.colour.bg.layer2};
}
`;

export interface IResponsiveDrawerProps {
    allowScroll?: boolean;
    initialWidth?: number;
    items?: Array<{sectionTitle?: string; contents: Array<ReactElement>;}>;
}

export const ResponsiveDrawer: React.FC<IResponsiveDrawerProps> = (props) => {
    const [open, setOpen] = useState(true);
    const [isResizing, setIsResizing] = useState(false);
    const [lastXDown, setLastXDown] = useState(0);
    const [drawerWidth, setDrawerWidth] = useState<number>(props.initialWidth || 600);

    const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        if (!isResizing) return;
        e.stopPropagation();
        e.preventDefault();

        let bodyOffset = document.body.getBoundingClientRect(),
            elemOffset = e.currentTarget.getBoundingClientRect(),
            offsetL = elemOffset.left - bodyOffset.left;
        let newW = (e.clientX - offsetL);
        let minW = 100;
        let maxW = 1000;
        if (newW > minW && newW < maxW)
            setDrawerWidth(newW);
    }

    return (
        <SideDrawer open={open} width={drawerWidth} allowScroll={props.allowScroll}
            onMouseUp={(e) => {
                setIsResizing(false);
                if (e.clientX === lastXDown)
                    setOpen(!open);
            }}
            onMouseMove={onMouseMove}
        >
            <Dragger drawerOpen={open}
                onMouseDown={(e) => {
                    setIsResizing(true);
                    setLastXDown(e.clientX);
                }}
            />
            <ul className="content-wrapper">
                {
                    props.items?.map((section) =>
                    <Section hidden={section.contents.length <= 0}>
                        <h2>{section.sectionTitle}</h2>
                        <ul>
                            {section.contents}
                        </ul>
                    </Section>)
                }
            </ul>

        </SideDrawer>
    )
}