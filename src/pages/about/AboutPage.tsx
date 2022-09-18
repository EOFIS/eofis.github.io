import React from "react";
import { PersonList } from "../../components/PersonList";
import style from "./About.module.sass";
import logo from "../../logo.svg";

export const AboutPage = () => {
  return (
    <div>
      <div className="full-height-screen">
        <div className="full-width-container w1-2">
          <div className={style["title"]}>
            <h1>This is Us.</h1>
            <h2>#ourstory</h2>
            <h2>#foundersjourney</h2>
            <h2>#ourmission</h2>
            <h2>#theteam</h2>
          </div>
          <img title="Eofis Logo" src={logo} alt="Eofis logo" />
        </div>
      </div>
      <div className="full-height-screen">
        <div className="full-width-container w1-2">
          <div className={style["section"]}>
            <h1>Our Story</h1>
            <h2>
              We're a team of young entrepreneurs with a new take on an old
              idea. We saw the power of modern natural language processing and
              saw it could help people learn more effectively and efficiently.
            </h2>
            <h2>
              At Eofis, we recognize that we live in a knowledge economy. The
              human brain is only as powerful as the information it has
              available. We believe that the right approach and technological
              assistance can trigger the next great leap in human understanding.
            </h2>
            <h2>
              We build our software in constant communication with our clients
              and are deeply grateful for all the support and feedback we
              receive.
            </h2>
          </div>
          <img
            title="Founder Headshot Picture"
            src="img/mnt.webp"
            alt="Founders"
            style={{ flexGrow: 0, width: "25%" }}
          />
        </div>
      </div>
      <div className="full-height-screen-column">
        <div className={style["section"]}>
          <h1>Our Mission</h1>
          <div className="full-width-container w1-2 with-circle-underlay">
            <div >
              <div>
                <h2>Envision</h2>
                <h4>Creating a personal Internet of Knowledge</h4>
              </div>
              <div>
                <h2>Enable</h2>
                <h4>
                  Allowing individuals to gather all their learning in one
                  place: The Eofis Concept Map
                </h4>
              </div>
              <div>
                <h2>Empower</h2>
                <h4>Making learning accessible to everyone from everywhere</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1>Meet the team</h1>
        <PersonList
          people={[
            {
              imageSrc: "img/tiarnach.jpg",
              name: "Tiarnach Ó Riada",
              position: "CTO, Co-founder",
              linkedInURL: "https://www.linkedin.com/in/tiarnachreidy/",
              description:
                "BEng Electronics\nSoftware Developer at Spanish Point Tech.\n\
                        Tiarnach coordinates and implements the technical vision of eofis as the lead developer. He developed the core proof of concept as his bachelor's thesis at UCD and is currently hard at work somewhere badly lit.",
            },
            {
              imageSrc: "img/marysol1.jpg",
              name: "Marysol Angeloni",
              position: "CEO, Co-founder",
              linkedInURL:
                "https://www.linkedin.com/in/marysol-angeloni-637810194/",
              description:
                "MSc Management, BA History and Politics\nStartup coordinator at Web Summit\n\
                        Marysol has been starting businesses since 2018 when she started GiftIt, a nonprofit to allow people to donate their skills in the aid of charities.\n\
                        She's passionate about prototyping and customer-focused development.",
            },
            {
              imageSrc: "img/shivam1.jpg",
              name: "Shivam Agarwal",
              position: "Financial Advisor",
              linkedInURL:
                "https://www.linkedin.com/in/shivam-agarwal-8a625a5b/",
              description:
                "PhD candidate in Finance and Operational Risk at UCD\n\
                        Shivam defines our financial models and conducts market research. His advice and hard work as team member contributes to meaningful, finance-oriented conversations with potential investors.",
            },
            {
              imageSrc: "img/sophie1.png",
              name: "Sophie Cassidy",
              position: "Technical Advisor",
              linkedInURL: "https://www.linkedin.com/in/scassidy04/",
              description:
                "BEngSc, MEng Mechanical\nGraduate software engineer at Vodafone.\n\
                        Sophie was a fellow participant in the NovaUCD Student Enterprise Competition with FloMo. Sophie bridges the technical and business worlds, and shares her tech expertise to guide the development of eofis.",
            },
          ]}
        />
      </div>
    </div>
  );
};
