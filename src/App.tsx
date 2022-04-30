import { Link, Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { ProtectedRoute, ProvideAuth } from "./components/ProtectedRoute";
import LoginPage from "./pages/account/LoginPage";
import RegistrationConfirmationPage from "./pages/account/RegistrationConfirmationPage";
import RegistrationPage from "./pages/account/RegistrationPage";
import AccountPage from "./pages/account/AccountPage";
import { DarkTheme } from "./themes/DarkTheme";

const AppStyle = styled.div`
background: ${props => props.theme.colour.bg.layer0};
width: 100%;
height: 100%;
position: absolute;
color: ${props => props.theme.font.colour.layer0.normal};
font-size: ${props => props.theme.font.size.normal};
font-family: ${props => props.theme.font.family};

h1 {
  font-family: "GT Haptik Medium", sans-serif;
  font-weight: 400;
  line-height: 1.1;
  font-size: ${props => props.theme.font.size.heading}
}
h1, h2, h3, h4, h5, h6 {
  text-align: center;
}
h3 {
  margin-bottom: 24px;
  font-size: ${props => props.theme.font.size.large}
  line-height: 1.5;
}

`

const App = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <AppStyle>
        <ProvideAuth>
          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/register/confirmation">
              <RegistrationConfirmationPage />
            </Route>
            <Route path="/register">
              <RegistrationPage />
            </Route>
            <ProtectedRoute path="/account">
              <AccountPage />
            </ProtectedRoute>
            <ProtectedRoute path="/">
              <Home/>
            </ProtectedRoute>
          </Switch>
        </ProvideAuth>
      </AppStyle>
    </ThemeProvider>
  );
};

export default App;
