import React from "react";
import { PersonList } from "../../components/PersonList";

export const AboutPage = () => {
    return <div>
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
}