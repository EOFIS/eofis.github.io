import React from "react";
import { Link } from "react-router-dom";

export default class DemoHome extends React.Component {
    render() {
        return (
            <>
            <h1>Demo coming soon!</h1>
            <p>Please check back soon, this will contain our demo.</p>
            <Link to="/demo/quiz">Today's Quiz</Link> <br/>
            <Link to="/demo/notes">All your notes</Link>
            </>
        )
    }
}