import styled from "styled-components";

export interface ICardDrawerProps {
    sideDrawerOpen: boolean;
}
export const CardDrawer = styled.div<ICardDrawerProps>`
margin-left: ${props => props.sideDrawerOpen ? '200px' : '0'}
`;