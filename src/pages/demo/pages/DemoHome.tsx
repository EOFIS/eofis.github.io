import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { useAuth } from "../components/ProtectedRoute";

export default () => {
    let auth = useAuth();

    return (
        <>
            <h1>EOFIS Demo coming soon!</h1>
            {auth.user && <h3>Welcome back {auth.user.name}</h3>}
            
            <Link to="/demo/quiz">Today's Quiz</Link> <br />
            <Link to="/demo/notes">All your notes</Link> <br />
            {
                auth.user ?
                    <Link to="/demo/account">Account</Link>
                    :
                    <>
                        <Link to="/demo/login">Log in</Link>
                        <Button primary>
                            <Link to="/demo/register">
                                Try EOFIS!
                            </Link>
                        </Button>
                    </>
            }
        </>
    )
}
