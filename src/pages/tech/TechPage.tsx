import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FeatureList } from "../../components/FeatureList";
import { ImagePane } from "../../components/ImagePane";
import { ImageShowcase } from "../../components/ImageShowcase";

export const TechPage = () => {
    return <div>
                <FeatureList>
            <h2>Select your text. We do the rest.</h2>
            <dl>
                <dt>No-hassle generated quizzes</dt>
                <dd>Our automatic generation models work to turn your text into flashcards that capture the key points of your text. Using state of the art natural language processing, Eofis can turn any text into a set of flashcards that we store in your <HashLink to="/#concept-map">concept map</HashLink> and show you in a <HashLink to="/#quiz">quiz</HashLink> when you need to remember them.</dd>
                <dt id="quiz">Automatic study timetable</dt>
                <dd>Remember anything you want with the proven spaced repetition study method. Eofis shows you what you need to study exactly when you need to study it. We know you have a lot going on so don't worry if you miss a day here and there, Eofis will just reschedule your learning and you can pick up where you left off.</dd>
                <dt id="concept-map">Stay organised and make connections</dt>
                <dd>Never lose a note again with our automatic yet personalisable visual concept map that links everything together. Create topics to group your learning, set colours and images to help you remember, shape the map however it helps you, Eofis is here to help.</dd>
                <dt>Connections aren't just for data</dt>
                <dd>Do you like to study like a lone wolf or prefer to run with a pack? We've got you either way with our opt-in powerful group learning system. Create study groups, informal competitions or just put the head down and crack on.</dd>
            </dl>
        </FeatureList>
        <ImagePane imageLocation='left' src='img/mnt.webp'>
            <h2>Our Story</h2>
            <p>
                We're a team of young entrepreneurs with a new take on an old idea. We saw the power of modern natural language processing and saw it could help people learn more effectively and efficiently.
            </p>
            <p>
                At EOFIS, we recognize that we live in a knowledge economy.
                The human brain is only as powerful as the information it has available.
                We believe that the right approach and technological assistance can trigger the next great leap in human understanding.
            </p>
            <p>
                We build our software in constant communication with our clients and are deeply grateful for all the support and feedback we receive.
            </p>
            <HashLink to="#subscribe-form">Subscribe for updates</HashLink>
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
        <ImageShowcase src="img/DocClosed.png" overlay={
            <ul>
                <li><b>Autogenerate</b> questions from any input</li>
                <li><b>Collaborate</b> on topics with a powerful group system</li>
                <li><b>Control</b> your content, don't let it control you</li>
            </ul>
        } />

    </div>
}