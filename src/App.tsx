import logo from "./logo.svg";
import style from "./App.module.sass";
import { Link, Route, Switch } from "react-router-dom";
import { ContactPage } from "./pages/contact/ContactPage";
import { HomePage } from "./pages/home/HomePage";
import React from "react";
import { ConfirmSubscriptionPage } from "./pages/confirm-subscription/ConfirmSubscriptionPage";
import { BlogPage } from "./pages/blog/BlogPage";
import { AboutPage } from "./pages/about/AboutPage";
import { TechPage } from "./pages/tech/TechPage";

export const App = () => {
    return (
        <div className={style["App"]}>
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
                                <Link to="/tech">Tech</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                            <li>
                                <Link to="/blog">Blog</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <div className={style['app-content']}>
                <Switch>
                    <Route path="/tech">
                        <TechPage />
                    </Route>
                    <Route path="/about">
                        <AboutPage />
                    </Route>
                    <Route path="/contact">
                        <ContactPage />
                    </Route>
                    <Route path="/confirm-subscription">
                        <ConfirmSubscriptionPage />
                    </Route>
                    <Route path="/blog/:id">
                        <BlogPage />
                    </Route>
                    <Route path="/blog">
                        <BlogPage />
                    </Route>
                    <Route path="/">
                        <HomePage />
                    </Route>
                </Switch>
            </div>
            <footer className={style['App-footer']}>

            </footer>
        </div>
    );
};
