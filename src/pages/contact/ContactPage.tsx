import React, { useState } from "react";
import emailjs from '@emailjs/browser';

import FAQBanner from "../../components/FAQBanner";
import questions from "./FAQ.json";

export const ContactPage = () => {

  const [inputs, setInputs] = useState<ContactUsFormInputs>({
    from_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (event: { target: { name: any; value: any } }) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    emailjs.sendForm('contact_service', 'contact_form_temp', e.target, '19ERP2s4UApNutDUw')
      .then((result: { text: any; }) => {
          console.log(result.text);
      }, (error: { text: any; }) => {
          console.log(error.text);
      });
  };

  return (
    <div className="centreContent">
      <div >
        <h1>Contact Us</h1>
        <h2>Have questions?</h2>
        <h3>
          Check out our FAQs below or get in touch if you don't find your answer
        </h3 >
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="from_name"
            placeholder="Name"
            value={inputs.from_name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="user_email"
            placeholder="Email"
            value={inputs.user_email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message"
            value={inputs.message}
            onChange={handleChange}
          />
          <input type="submit" value="Send"/>
        </form>
      </div>
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
      <div>
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
  );
};

export interface ContactUsFormInputs {
  from_name: string;
  user_email: string;
  message: string;
}
