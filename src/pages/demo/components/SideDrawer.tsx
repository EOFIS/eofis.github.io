import React from "react";
import { useState } from "react";
import styled from "styled-components";

export interface ISideDrawerProps {
    open: boolean;
    width: number;
}
export const SideDrawer = styled.div<ISideDrawerProps>`
top: 0;
height: 100vh;
float: left;
background-color: #00f;
position: relative;
flex-direction: column;
z-index: 1;
overflow-y: hidden;
& > .content {
    padding: 4px;
    width: ${props => props.width}px;
    display: ${props => props.open ? 'block' : 'none'};
    user-select: none;
}
`;

export const SideDrawerHandle = styled.div


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
    background-color: ${props => props.drawerOpen? '#00d' : 'darkred'}; // Slightly darker than SideDrawer when open, slightly darker than background when closed

    &:hover {
        background-color: #222;
    }
`;

export interface IResponsiveDrawerProps {

}

export const ResponsiveDrawer: React.FC<IResponsiveDrawerProps> = (props) => {
    const [open, setOpen] = useState(true);
    const [isResizing, setIsResizing] = useState(false);
    const [lastXDown, setLastXDown] = useState(0);
    const [drawerWidth, setDrawerWidth] = useState<number>(200);



    const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        if (!isResizing) return;
        e.stopPropagation();
        e.preventDefault();

        let bodyOffset = document.body.getBoundingClientRect(),
            elemOffset = e.currentTarget.getBoundingClientRect(),
            offsetL = elemOffset.left - bodyOffset.left;
        let newW = (e.clientX - offsetL);
        let minW = 50;
        let maxW = 300;
        if (newW > minW && newW < maxW)
            setDrawerWidth(newW);
        
    }

    return (
        <div>
            <SideDrawer open={open} width={drawerWidth}
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
                <div className='content'>
                    {open && 'O'}<br/>
                    {isResizing && 'R'}<br/>
                    {lastXDown}<br/>
                    {drawerWidth}<br/>
                {props.children}
                </div>
            </SideDrawer>
        </div>
    )
}