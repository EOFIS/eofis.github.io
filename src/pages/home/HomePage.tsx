import React from "react";
import { Link } from "react-router-dom";
import { ImagePane } from "../../components/ImagePane";
import { ImageShowcase } from "../../components/ImageShowcase";
import { PersonList } from "../../components/PersonList";
import { HashLink } from "react-router-hash-link";
import style from "./Home.module.sass";
import { FeatureList } from "../../components/FeatureList";
import decorativeConceptMap from "../../decorativeConceptMap.svg";
import { Asterisk, Calendar2Check, Calendar2Date, Calendar2Day, Calendar2DayFill, Calendar2Event, Calendar2Range, Calendar2Week, ChatDotsFill, ChatFill, ChatLeftDotsFill, ChatText, Diagram2, Diagram3, Dot, GraphDown, PeopleFill, QuestionCircle } from "react-bootstrap-icons";
import logo from "../../logo.svg";

export const HomePage = () => {
    return <div>
        <div className={style["full-height-screen"]}>
            <div className={style["message"]}>
                <h2>
                    Automatically generated flashcards and concept maps.<br />
                    All in one place.
                </h2>
                <h4>
                    Select your text. We do the rest.
                </h4>
            </div>
            <img title="Concept map diagram" src={decorativeConceptMap} className={style['decorative-concept-map']}/>
        </div>
        <div className={style["full-height-screen"]+' '+style['with-underlay']}>
            <div>
                <div>
                    <div className={style["icon-container"]}><QuestionCircle/><ChatText/></div>
                    <h4>No-hassle generated quizzes</h4>
                    <p>
                        Our automatic generation models work to turn your text into flashcards that capture the key points of your text.
                        Using state of the art natural processing Eofis turns any text into a set of flashcards that we store in your concept map and show you in a quiz just when you need to remember them.
                    </p>
                </div>
                <div>
                    <div className={style["icon-container"]}><Calendar2Week/></div>
                    <h4>Automatic study timetable</h4>
                    <p>
                        Remember anything you want with the proven spaced repetition study method.
                        Eofis shows you what you need to study exactly when you need to study it.
                        We know you have a lot going on so don't worry if you miss a day here and there,
                        Eofis will just reschedule your learning and you can pick up where you left off.
                    </p>
                </div>
                <div>
                    <div className={style["icon-container"]}><Asterisk/><Diagram2/><Diagram3/></div>
                    <h4>Organise and link your notes</h4>
                    <p>
                        Never lose a note again with our automatic yet personalisable visual concept map that links everything together.
                        Create topics to group your learning, set colours and images to help you remember, shape the map however it helps you, Eofis is here to help.
                    </p>
                </div>
            </div>
            <div className={style["underlay-container"]}>
                <div>
                    <div className={style["icon-container"]}><PeopleFill/></div>
                    <h4>Connections aren't just for data...</h4>
                    <p>Do you like to study like a lone wolf or prefer to run with the pack? We've got you covered either way with our opt-in powerful group learning system. Create study groups, informal competitions or just put the head down and crack on.</p>
                </div>
            </div>
        </div>
        <div className={style["full-height-screen"]+' '+style["w1-2"]}>
            <img src={logo}/>
            <div>
                <h2>Start your certification journey with EOFIS tech.</h2>
                <h2>Learn, manage, and track your progress on the go.</h2>
                <h2><Link to="/tech">Get Started</Link></h2>
            </div>
        </div>
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
        <div>
            <h1>Meet the team</h1>
            <PersonList people={[
                {
                    imageSrc: 'img/tiarnach.jpg',
                    name: 'Tiarnach Ó Riada',
                    position: 'CTO, Co-founder',
                    linkedInURL: "https://www.linkedin.com/in/tiarnachreidy/",
                    description: "BEng Electronics\nSoftware Developer at Spanish Point Tech.\n\
                        Tiarnach coordinates and implements the technical vision of Eofis as the lead developer. He developed the core proof of concept as his bachelor's thesis at UCD and is currently hard at work somewhere badly lit."
                },
                {
                    imageSrc: 'img/marysol1.jpg',
                    name: 'Marysol Angeloni',
                    position: 'CEO, Co-founder',
                    linkedInURL: 'https://www.linkedin.com/in/marysol-angeloni-637810194/',
                    description: "MSc Management, BA History and Politics\nStartup coordinator at Web Summit\n\
                        Marysol has been starting businesses since 2018 when she started GiftIt, a nonprofit to allow people to donate their skills in the aid of charities.\n\
                        She's passionate about prototyping and customer-focused development."
                },
                {
                    imageSrc: 'img/shivam1.jpg',
                    name: 'Shivam Agarwal',
                    position: 'Financial Advisor',
                    linkedInURL: 'https://www.linkedin.com/in/shivam-agarwal-8a625a5b/',
                    description: 'PhD candidate in Finance and Operational Risk at UCD\n\
                        Shivam defines our financial models and conducts market research. His advice and hard work as team member contributes to meaningful, finance-oriented conversations with potential investors.'
                },
                {
                    imageSrc: 'img/sophie1.png',
                    name: 'Sophie Cassidy',
                    position: 'Technical Advisor',
                    linkedInURL: 'https://www.linkedin.com/in/scassidy04/',
                    description: 'BEngSc, MEng Mechanical\nGraduate software engineer at Vodafone.\n\
                        Sophie was a fellow participant in the NovaUCD Student Enterprise Competition with FloMo. Sophie bridges the technical and business worlds, and shares her tech expertise to guide the development of Eofis.'
                },
            ]} />

        </div>
    </div>
};
