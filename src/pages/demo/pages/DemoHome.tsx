import React from "react";
import { Link } from "react-router-dom";
import StyledButton from "../components/StyledButton";
import { useAuth } from "../components/ProtectedRoute";
import { StyledLink } from "../components/StyledLink";

export default () => {
    let auth = useAuth();

    return (
        <>
            <h1>EOFIS Demo coming soon!</h1>

            {auth.user && <h3>Welcome back {auth.user.name}</h3>}

            <p>
                This is a block of normal text
            </p>
            <StyledLink to="/demo/quiz">Today's Quiz</StyledLink> <br />
            <StyledLink to="/demo/notes">All your notes</StyledLink> <br />
            {
                auth.user ?
                    <StyledLink to="/demo/account">Account</StyledLink>
                    :
                    <>
                        <StyledLink to="/demo/login">Log in</StyledLink>
                        <Link to="/demo/register">
                            <StyledButton primary>
                                Try EOFIS!
                            </StyledButton>
                        </Link>
                    </>
            }
        </>
    )
}
