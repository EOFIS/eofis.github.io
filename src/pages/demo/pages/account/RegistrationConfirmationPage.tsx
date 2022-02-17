import React, { useEffect, useState } from "react";
import styled from "styled-components";
import queryString from "query-string";
import { useLocation } from "react-router";
import { StyledLink } from "../../components/StyledLink";

const RegistrationConfirmationPageStyle = styled.div`
`;

interface IRegistrationConfirmationQueryParams {
    registered: boolean;
    name: string;
}

export default function RegistrationConfirmationPage () {
    const location = useLocation()

    const [queryParams, setQueryParams] = useState<queryString.ParsedQuery<string>>();
    const handleQueryString = () => {
        const query = queryString.parse(location.search);
        setQueryParams(query);
    }
    useEffect(() => {
        handleQueryString();
    },[location]);
    return <RegistrationConfirmationPageStyle>
        Thanks for registering to use EOFIS. You should receive an email at the address you specified on the previous page to confirm that address. <br/>
        In the meantime, to start your EOFIS journey please visit the <StyledLink to="/docs/gettingstarted">Tutorial</StyledLink>
    </RegistrationConfirmationPageStyle>
}