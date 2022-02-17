import React, { useState } from "react";
import { Link } from "react-router-dom";
import StyledButton from "../components/StyledButton";
import { useAuth } from "../components/ProtectedRoute";
import { StyledLink } from "../components/StyledLink";
import { Logo } from "../components/Logo";
import { useTheme } from "styled-components";
import { BinarySlideSwitch } from "../components/BinarySlideSwitch";

export default () => {
    let auth = useAuth();
    const theme = useTheme();

    let [centerSwitch, setCenterSwitch] = useState<boolean>(false);

    return (
        <div style={{
            background: centerSwitch ? theme.font.colour.layer0.normal : theme.colour.bg.layer0,
            height: '100vh',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column'
        }}>
            <StyledLink to="/demo/quiz"style={{ margin: 'auto' }} >
                <Logo monochrome
                switched={centerSwitch}
                />
            </StyledLink>
            <BinarySlideSwitch
                options={[{ display: 'Work', code: 'WORK' }, { display: 'Play', code: 'PLAY' }]}
                onChange={(e) => setCenterSwitch(e.currentTarget.checked)}
                style={{ margin: 'auto', marginTop: '10px' }} />
            {/* {auth.user && <h3>Welcome back {auth.user.name}</h3>} */}

            {/* <StyledLink to="/demo/quiz">Today's Quiz</StyledLink> <br />
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
            } */}
        </div>
    )
}
