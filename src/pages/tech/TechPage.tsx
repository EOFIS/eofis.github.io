import React from "react";
import { AnimatedProcess } from "../../components/AnimatedProcess";
import decorativeConceptMap from "../../img/decorativeConceptMap.svg";

export const TechPage = () => {
    return <div className="colour-tile-list">
        <h1>Here's how eofis works...</h1>
        <div className="full-height-screen">
            <div className="full-width-container w1-2">
                <div className="blob-headed-message">
                    <h2>
                        STEP&nbsp;1:&nbsp;CHOOSE
                    </h2>
                    <h3>
                        Highlight the text you want to learn
                    </h3>
                    <p>
                        Select your text and send it to the eofis browser extension.
                    </p>
                    <p>
                        Eofis browser extension works on
                    </p>
                    <ul className="tick-list">
                        <li>Chrome</li>
                        <li>Firefox</li>
                        <li className="skip">on</li>
                        <li>Windows</li>
                        <li>Mac OS</li>
                        <li>Linux</li>
                    </ul>
                </div>
                <div>
                    <AnimatedProcess/>
                    {/* <img title="Image showing selected text in an online article" src={decorativeConceptMap} /> */}
                </div>
            </div>
        </div>
        <div className="full-height-screen">
            <div className="full-width-container w1-2">
                <div className="blob-headed-message">
                    <h2>
                        STEP&nbsp;2:&nbsp;MAGIC!
                    </h2>
                    <h3>
                        Flashcards, quizzes and notes are automatically generated and organised from the text
                    </h3>
                    <p>
                        Eofis automatically generates flashcards and a personal concept map, complete with reminders to practice your learning.
                    </p>
                </div>
                <div>
                    <img title="Image showing concept map" src={decorativeConceptMap} />
                </div>
            </div>
        </div>
        <div className="full-height-screen">
            <div className="full-width-container w1-2">
                <div className="blob-headed-message">
                    <h2>
                        STEP&nbsp;3:&nbsp;PRACTICE
                    </h2>
                    <h3>
                        Practice makes perfect!
                    </h3>
                    <p>
                        Practice your learning using eofis' flashcards and a sophisticated scheduling algorithm to maximise your learning.
                    </p>
                </div>
                <div>
                    <img title="Image showing question being practiced" src="img/PracticeCard.png" style={{maxWidth: '816px'}}/>
                </div>
            </div>
        </div>
        <div className="full-height-screen">
            <div className="full-width-container w1-2">
                <div>
                    <h2>
                        Still wondering how eofis works?
                    </h2>
                    <h4><strong>See it in action</strong></h4>
                </div>
                <div>
                    <video controls>
                        <source src="https://drive.google.com/u/0/uc?id=10xBdQBQJuQiIfMb_KqJgBx9TWdrSUyQJ&export=download" type="video/mp4" />
                        This video could not be loaded
                    </video>
                </div>
            </div>
        </div>
    </div>
}