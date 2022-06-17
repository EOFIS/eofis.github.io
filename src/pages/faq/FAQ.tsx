import React from "react";
import { Link } from "react-router-dom";

class FAQ extends React.Component {
    render() {
        return <div className="centreContent center">
            <h1>Frequently Asked Questions</h1>
            <p>
                <h2>What does EOFIS mean?</h2>
                Eo Fis is an Old Irish name for the Salmon of Knowledge, a legendary salmon who, when eaten, would give anyone access to all the world's knowledge.
            </p>
            <p>
                <h2>I like what I see. How can I invest/find out more?</h2>
                Please send us an email through the <Link to="/contact">Contact</Link> page and we can send you some info or set up a meeting to discuss.
            </p>
            <p>
                <h2>This looks really interesting! How can I join?</h2>
                Are you passionate about helping people learn? Do you have skills in Mobile Development, Marketing, or Sales? Even if you have nothing but a deep interest, we'd love to hear from you. Send us a message through the <Link to="/contact">Contact</Link> page and we'll get back to you.
            </p>
        </div>
    }
};

export default FAQ;