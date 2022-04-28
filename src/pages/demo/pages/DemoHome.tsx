import React, { useState } from "react";
import { Link } from "react-router-dom";
import StyledButton from "../components/StyledButton";
import { useAuth } from "../components/ProtectedRoute";
import { StyledLink } from "../components/StyledLink";
import { Logo } from "../components/Logo";
import styled, { useTheme } from "styled-components";
import { BinarySlideSwitch } from "../components/BinarySlideSwitch";
import LoginForm from "./account/components/LoginForm";

const BGSVGStyle = styled.svg<{centerSwitch?: boolean}>`
.rectLeft {
    fill: ${props=> props.centerSwitch ? props.theme.font.colour.layer0.normal : props.theme.colour.bg.layer0};
}
.rectRight {
    fill: ${props=> props.centerSwitch ? props.theme.colour.bg.layer0 : props.theme.font.colour.layer0.normal};
}
`;

export default function DemoHome() {
    let auth = useAuth();
    const theme = useTheme();

    let [centerSwitch, setCenterSwitch] = useState<boolean>(false);

    return (
        <BGSVGStyle style={{
            height: '100vh',
            width: '100%',
        }}
        centerSwitch={centerSwitch}
        >
            <rect x="0"   y="0" width="50%" height="100%" className="rectLeft"/>
            <rect x="50%" y="0" width="50%" height="100%" className="rectRight"/>

            <foreignObject width="100%" height="100%">
                <div style={{
                    margin: '0 auto',
                    padding: '4px auto',
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column'
                }}>
                    <BinarySlideSwitch
                        options={[{ display: 'Work', code: 'WORK' }, { display: 'Life', code: 'LIFE' }]}
                        onChange={(e) => setCenterSwitch(e.currentTarget.checked)}
                        style={{ margin: 'auto', marginBottom: '10px' }} />

                    <StyledLink to="/demo/quiz" style={{ margin: 'auto' }} >
                        <Logo circle
                            switched={centerSwitch}
                        />
                    </StyledLink>

                    <div style={{ margin: 'auto' }}>{
                        auth.user ? <p>'Welcome '+ {auth.user.name}</p> :
                            <LoginForm onSuccess={() => 1}/>
                    }
                    </div>
                </div>
            </foreignObject>
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
        </BGSVGStyle>
    )
}
