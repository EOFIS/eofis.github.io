import React, { useState } from "react";

import FAQBanner from "../../components/FAQBanner"
import questions from "./FAQ.json"

export const ContactPage = () => {
  const [inputs, setInputs] = useState<ContactUsFormInputs>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event: { target: { name: any; value: any } }) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  return (
    <div className="centreContent">
      <h1>Contact Us</h1>
      <h2>Have questions?</h2>
      <h3>
        Check out our FAQs below or get in touch if you don't find your answer
      </h3>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={inputs.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={inputs.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="Message"
          value={inputs.message}
          onChange={handleChange}
        />
        <input type="submit" value="Send" />
      </form>
      {/* <p>
        We would love to hear from you, whatever your query. Please email one of
        the below addresses and we'll respond as soon as possible or send us a
        message via{" "}
        <a href="https://www.linkedin.com/company/eofis-ie/">LinkedIn</a>
      </p>
      <ul>
        <li>info &lt;at&gt; eofis.ie : for general queries.</li>
        <li>support &lt;at&gt; eofis.ie : for help with our software.</li>
      </ul> */}
      <div className="full-height-screen">
          <div className="centreContent">
            <h1>Frequently Asked Questions</h1>
            <FAQBanner>
                {questions.map((question) => (
                    <FAQBanner.Entity key={question.id}>
                        <FAQBanner.Question>{question.question}</FAQBanner.Question>
                        <FAQBanner.Text>{question.answer}</FAQBanner.Text>
                    </FAQBanner.Entity>
                ))}
            </FAQBanner>
          </div>
      </div>
    </div>
  );
};

export interface ContactUsFormInputs {
  name: string;
  email: string;
  message: string;
}
