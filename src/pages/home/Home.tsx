import React from "react";
import logo from "../../logo.svg";
import "./Home.sass";
import { Heading, Hero } from "react-bulma-components"

class Home extends React.Component {
    render() {
        return (
            <>
                <Heading>
                    EOFIS
                </Heading>
                <Heading subtitle>
                    Automatically generated flashcards and concept maps.<br />
                    All in one place.
                </Heading>

                <Hero size="fullheight">
                    <Hero.Body>

                    </Hero.Body>
                </Hero>
                {/* <img src={logo} className={style["App-logo"]} alt="logo" /> */}
            </>
        )
    }
};

export default Home;