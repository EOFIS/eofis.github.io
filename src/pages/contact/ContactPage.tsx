import React, { useState } from "react";
import emailjs from '@emailjs/browser';

import FAQBanner from "../../components/FAQBanner";
import questions from "./FAQ.json";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactPage = () => {

  const initialInputs = {
    from_name: "",
    user_email: "",
    message: "",
  }

  const [inputs, setInputs] = useState<ContactUsFormInputs>(initialInputs);
  
  const clearInputs = () => {
    setInputs({ ...initialInputs });
  };

  const handleChange = (event: { target: FormField }) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const showToastMessage = () => {
    toast.success('Contact form successfully submitted!', {
        position: toast.POSITION.BOTTOM_RIGHT
    });
};

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as HTMLFormElement
    emailjs.sendForm('contact_service', 'contact_form_temp', target, '19ERP2s4UApNutDUw')
      .then((result: { text: any; }) => {
          console.log(result.text);
          clearInputs()

      }, (error: { text: any; }) => {
          console.log(error.text);
      });

    showToastMessage()
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
        <ToastContainer />
      </div>
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

export interface FormField {
  name: string;
  value: string;
  placeholder: string;
}
