import logo from "./logo.svg";
import style from "./App.module.sass";
import { Link, Route, Switch } from "react-router-dom";
import FAQ from "./pages/faq/FAQ";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import React from "react";
import { SubscribeForm } from "./components/SubscribeForm";
import ConfirmSubscription from "./pages/confirm-subscription/ConfirmSubscription";
import { Blog } from "./pages/blog/Blog";

const App = () => {
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
                                <Link to="/faq">FAQ</Link>
                            </li>
                            <li>
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <div className={style['app-content']}>
                <Switch>
                    <Route path="/faq">
                        <FAQ />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/confirm-subscription">
                        <ConfirmSubscription />
                    </Route>
                    <Route path="/blog/:id">
                        <Blog/>
                    </Route>
                    <Route path="/blog">
                        <Blog/>
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
            <SubscribeForm id="subscribe-form"/>
        </div>
    );
};

export default App;
