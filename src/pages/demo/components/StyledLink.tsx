import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
color: #ff4906;
font-weight: bold;
text-decoration: none;

&:hover {
    color: #ff6f06;
    text-decoration: underline;
}
`;