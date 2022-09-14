import React from "react";

class Contact extends React.Component {
    render() {
        return <div className="centreContent">
            <h1>Get in touch</h1>
            <p>We would love to hear from you, whatever your query. Please email one of the below addresses and we'll respond as soon as possible or send us a message via <a href="https://www.linkedin.com/company/eofis-ie/">LinkedIn</a></p>
            <ul>
                <li>info &lt;at&gt; eofis.ie : for general queries.</li>
                <li>support &lt;at&gt; eofis.ie : for help with our software.</li>
            </ul>
        </div>
    }
};

export default Contact;