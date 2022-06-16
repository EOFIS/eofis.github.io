import React from "react";
import { Link } from "react-router-dom";
import { ImagePane } from "../../components/ImagePane";
import style from "./Home.module.sass";

class Home extends React.Component {
    render() {
        return <div>
            <h1>
                EOFIS
            </h1>
            <h3>
                Automatically generated flashcards and concept maps.<br />
                All in one place.
            </h3>

            <ImagePane imageLocation='left' src='img/mnt.webp'>
                <h2>Our Story</h2>
                <p>
                    We're two young entrepreneurs with a new take on an old idea. We saw the power of modern natural language processing and saw it could help people learn more effectively and efficiently.
                </p>
                <p>
                    At EOFIS, we recognize that we live in a knowledge economy.
                    The human brain is only as powerful as the information it has available.
                    We believe that the right approach and technological assistance can trigger the next great leap in human understanding.
                </p>
                <p>
                    We build our software in constant communication with our clients and are deeply grateful for all the support and feedback we receive.
                </p>
                <Link to="/contact">{/* Subscribe for updates */}Contact us</Link>
            </ImagePane>
            <ImagePane imageLocation="right" src='img/ConceptMap.png' inset fillWidth>
            <h2>What We Do</h2>
            <h4>The Learning Revolution</h4>
            <p>
                At EOFIS, we develop new technologies using the efficiency of spaced repetition and powerful and easy customization tools to enhance people's learning and retaining experience.
            </p>
            <p>
                Our mission is to allow everyone to learn and retain useful information without spending excessive hours studying!
            </p>
            <Link to="/faq">Learn More</Link>
            </ImagePane>
        </div>
    }
};

export default Home;