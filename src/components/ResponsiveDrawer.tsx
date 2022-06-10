import React, { ReactElement } from "react";
import { useState } from "react";
import styled from "styled-components";
import { ChevronLeft } from "./icons/ChevronLeft";
import { ChevronRight } from "./icons/ChevronRight";

interface ISideDrawerProps {
    open: boolean;
    width: number;
    allowScroll?: boolean;
}
const ResponsiveDrawerStyle = styled.div<{
    drawerWidth: number;
}>`
margin: 0;
padding: 0;
transform: width 300ms cubic-bezier(0.2, 0, 0, 1) 0s;
background: ${props => props.theme.colour.bg.layer1};
`;
const SideDrawer = styled.div<ISideDrawerProps>`
height: 100vh;
float: left;
background: ${props => props.theme.colour.bg.layer1};
color: ${props => props.theme.font.colour.layer0.normal};
position: relative;
flex-direction: column;
z-index: 1;
overflow-y: scroll;

ul.content-wrapper {
    padding: 0;
    margin: 0 6px 0 0;
    display: ${props => props.open ? 'block' : 'none'};
    width: 100%;
    float: left;
}
`;

const Section = styled.li<{
    drawerWidth: number;
}>`
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
    width: ${props => props.drawerWidth}px;
}

div.load-more {
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    cursor: pointer;
    font-size: ${props => props.theme.font.size.small};
    padding: 8px 0;

    &:hover {
        height: auto;
    }

    &:hover > .expander-line {
        background: ${props => props.theme.colour.primary.theme};
        &.l {
            margin-inline-end: 16px;
        }
        &.r {
            margin-inline-start: 16px;
        }
    }
    & > .expander-line {
        flex: 1;
        background: white;
        height: 2px;
        transition: all 0.4s;
        margin-inline: 16px;

        &.l {
            margin-inline-end: -32px;
        }
        &.r {
            margin-inline-start: -32px;
        }
    }
    &:hover > button {
        color: ${props => props.theme.colour.primary.theme};
        opacity: 1;
        transition: opacity 0.3s 0.2s, color 0.2s 0s;
    }
    & > button {
        cursor: pointer;
        margin: 0;
        padding: 4px 8px;

        border-radius: 4px;

        border: none;

        transition: opacity 0.1s 0s, color 0.3s 0s;

        opacity: 0;
        background: none;
        color: inherit;
        &:hover {
            color: inherit;
        }
    }
}

`;

interface IDraggerProps {
    drawerOpen: boolean;
    drawerWidth: number;
    showControls: boolean;
}
const Dragger = styled.div<IDraggerProps>`
width: ${props => props.drawerOpen? '12px' : '24px'};

height: 100vh;
cursor: ew-resize;
position: absolute;
left: ${props => props.drawerOpen? props.drawerWidth + 16 -2 : '0'}px;
display: block;
z-index: 100;
background: ${props => props.theme.colour.bg.layer1};
button.collapse-toggle-button {
    position: absolute;
    top: 16px;
    left: ${props => props.drawerOpen ? '0': '12px'};
    background: white;
    border: 0;
    border-radius: 12px;
    padding: 0;
    z-index: 100;
    line-height: 8px;
    cursor: pointer;

    opacity: ${props => props.drawerOpen && !props.showControls ? '0' : '1'};
    transition: opacity ease-in 1s;
    transition: background ease-in 0.2s;
    &:hover {
        opacity: 1;
        background: ${props => props.theme.colour.primary.theme};
    }

    &>svg {
        width: 24px;
        height: 24px;
        fill: white;
    }
}
div.resize-handle {
    position: absolute;
    left: ${props => props.drawerOpen ? '11px': '22px'};
    z-index: 99;
    width: 2px;
    height: 100%;
    background-color: ${props => props.drawerOpen ? 'none' : props.theme.colour.primary.textHover};
    &:hover {
        background-color: ${props => props.drawerOpen ? props.theme.colour.primary.theme : props.theme.colour.secondary.theme};
    }
    
}
`;

export interface IResponsiveDrawerProps {
    allowScroll?: boolean;
    initialWidth?: number;
    items?: Array<{
        sectionTitle?: string;
        contents: Array<ReactElement>;
        onLoadMore?: () => void;
    }>;
}

export const ResponsiveDrawer: React.FC<IResponsiveDrawerProps> = (props) => {
    const [open, setOpen] = useState(true);
    const [showCircle, setShowControls] = useState(false);
    const [isResizing, setIsResizing] = useState(false);
    const [lastXDown, setLastXDown] = useState(0);
    const [drawerWidth, setDrawerWidth] = useState<number>(props.initialWidth || 600);

    const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        if (!isResizing) return;
        e.stopPropagation();
        e.preventDefault();

        // let bodyOffset = document.body.getBoundingClientRect(),
        //     elemOffset = e.currentTarget.getBoundingClientRect(),
        //     offsetL = elemOffset.left - bodyOffset.left;
        // let newW = (e.clientX - offsetL);
        // let minW = 200;
        // let maxW = 1000;
        // if (newW > minW && newW < maxW)
        //     setDrawerWidth(newW);
    }

    return <ResponsiveDrawerStyle drawerWidth={drawerWidth} onMouseLeave={() => setIsResizing(false)}>
        <SideDrawer open={open} width={drawerWidth} allowScroll={props.allowScroll}
            onMouseUp={(e) => {
                setIsResizing(false);
                if (e.clientX === lastXDown)
                    setOpen(!open);
            }}
            onMouseMove={onMouseMove}
        >
            <ul className="content-wrapper">
                {
                    props.items?.map((section, si) =>
                        <Section drawerWidth={drawerWidth} hidden={section.contents.length <= 0} key={si}>
                            <h2>{section.sectionTitle}</h2>
                            <ul>
                                {section.contents}
                            </ul>
                            {section.onLoadMore ?
                                <div className="load-more">
                                    <span className="expander-line l"></span>
                                    <button onClick={section.onLoadMore}>Load more</button>
                                    <span className="expander-line r"></span>
                                </div>
                                : ''}
                        </Section>)
                }
            </ul>
        </SideDrawer>
        <Dragger drawerOpen={open}
            showControls={showCircle} 
            drawerWidth={drawerWidth}
            onMouseDown={(e) => {
                setIsResizing(true);
                setLastXDown(e.clientX);
            }}
            onMouseOver={() => setShowControls(true)}
            onMouseOut={() => setShowControls(false)}
        >
            <button className='collapse-toggle-button' onClick={() => setOpen(!open)}>
                {open ? <ChevronLeft /> : <ChevronRight />}
            </button>

            <div className="resize-handle" />
        </Dragger>
    </ResponsiveDrawerStyle>
}