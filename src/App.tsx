import logo from "./logo.svg";
import style from "./App.module.sass";
import { Link, Route, Switch } from "react-router-dom";
import FAQ from "./pages/faq/FAQ";
import Contact from "./pages/contact/Contact";
import Demo from "./pages/demo/DemoApp";
import Home from "./pages/home/Home";
import React from "react";
import styled from "styled-components";

const AppStyle = styled.div`
background-color: #771527
width: 100vw;
height: 100vh;
color: #FCECB6;

h1 {
  font-family: "GT Haptik Medium", sans-serif;
  font-weight: 400;
  line-height: 1.1;
  font-size: clamp(2.25rem, 5.3vw, 5rem);
}
h1, h2, h3, h4, h5, h6 {
  text-align: center;
}
h3 {
  width: 100%;
  margin-bottom: 24px;
  text-align: center;
  font-size: clamp(1.0125rem, 1.25vw, 1.125rem);
  line-height: 1.5;
}

`

const App = () => {
  return (
    <AppStyle>
      <header className={style["App-header"]}>
        <nav>
          <div>
            <Link to="/" className={style['pull-left']}>
              <img src={logo} className={style['logo']} />
            </Link>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/demo">Demo</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <Switch>
        <Route path="/faq">
          <FAQ />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/demo">
          <Demo />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </AppStyle>
  );
};

export default App;
