import React from "react";
import { Link } from "react-router-dom";
import style from "./Home.module.sass";
import decorativeConceptMap from "../../decorativeConceptMap.svg";
import { Asterisk, Calendar2Week, ChatText, Diagram2, Diagram3, PeopleFill, QuestionCircle } from "react-bootstrap-icons";
import logo from "../../logo.svg";

export const HomePage = () => {
    return <div className={style.home}>
        <div className="full-height-screen">
            <div className="full-width-container w1-2">
                <div className={style["message"]}>
                    <h2>
                        Automatically generated flashcards and concept maps.<br />
                        All in one place.
                    </h2>
                    <h4>
                        Select your text. We do the rest.
                    </h4>
                </div>
                <img title="Concept map diagram" src={decorativeConceptMap} className={style['decorative-concept-map']} />
            </div>
        </div>
        <div className="full-height-screen">
            <div className="full-width-container w1-2 with-underlay">

                <div>
                    <div>
                        <div className="icon-container"><QuestionCircle /><ChatText /></div>
                        <h4>No-hassle generated quizzes</h4>
                        <p>
                            Our automatic generation models work to turn your text into flashcards that capture the key points of your text.
                            Using state of the art natural processing eofis turns any text into a set of flashcards that we store in your concept map and show you in a quiz just when you need to remember them.
                        </p>
                    </div>
                    <div>
                        <div className="icon-container"><Calendar2Week /></div>
                        <h4>Automatic study timetable</h4>
                        <p>
                            Remember anything you want with the proven spaced repetition study method.
                            Eofis shows you what you need to study exactly when you need to study it.
                            We know you have a lot going on so don't worry if you miss a day here and there,
                            eofis will just reschedule your learning and you can pick up where you left off.
                        </p>
                    </div>
                    <div>
                        <div className="icon-container"><Asterisk /><Diagram2 /><Diagram3 /></div>
                        <h4>Organise and link your notes</h4>
                        <p>
                            Never lose a note again with our automatic yet personalisable visual concept map that links everything together.
                            Create topics to group your learning, set colours and images to help you remember, shape the map however it helps you, eofis is here to help.
                        </p>
                    </div>
                </div>
                <div className="underlay-container">
                    <div>
                        <div className="icon-container"><PeopleFill /></div>
                        <h4>Connections aren't just for data...</h4>
                        <p>Do you like to study like a lone wolf or prefer to run with the pack? We've got you covered either way with our opt-in powerful group learning system. Create study groups, informal competitions or just put the head down and crack on.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="full-height-screen w1-2 call-to-link-box">
            <div className="full-width-container w1-2 call-to-link-box">
                <img src={logo} />
                <div>
                    <h2>Start your certification journey with eofis tech.</h2>
                    <h2>Learn, manage, and track your progress on the go.</h2>
                    <h2><Link to="/tech">Get Started</Link></h2>
                </div>
            </div>
        </div>
    </div>
};
