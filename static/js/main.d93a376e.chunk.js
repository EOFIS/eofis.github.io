(this["webpackJsonpeofis-web"]=this["webpackJsonpeofis-web"]||[]).push([[0],[,,,,,function(e,t,n){e.exports={animationContainer:"AnimatedProcess_animationContainer__1PeUn",document:"AnimatedProcess_document__1tlh8",ingestDocument:"AnimatedProcess_ingestDocument__3-Hh2",logoQG:"AnimatedProcess_logoQG__3XVG2",yumYumQG:"AnimatedProcess_yumYumQG__19vAT",card:"AnimatedProcess_card__qWMJH",spewExpand:"AnimatedProcess_spewExpand__wqbFz",hideUntilOut:"AnimatedProcess_hideUntilOut__129x-",title:"AnimatedProcess_title__2ZbYi",titleColour:"AnimatedProcess_titleColour__PlBa4",front:"AnimatedProcess_front__2Hjvt",cardsContainer:"AnimatedProcess_cardsContainer__34aHI",spewCards:"AnimatedProcess_spewCards__26X_d",textLine:"AnimatedProcess_textLine__3AE6-",highlight:"AnimatedProcess_highlight__1ZjLw",highlightOn:"AnimatedProcess_highlightOn__3VGdD"}},,,,,,,,function(e,t,n){e.exports={personList:"PersonList_personList__2qVF3",personListItem:"PersonList_personListItem__2lScn",description:"PersonList_description__2VD2L",socialBanner:"PersonList_socialBanner__2Z0Ms",textContainer:"PersonList_textContainer__fVnfl"}},function(e,t,n){e.exports={App:"App_App__1DKa7","App-logo":"App_App-logo__1Uawt","App-logo-spin":"App_App-logo-spin__AjbbL","App-header":"App_App-header__3Ghwo","App-content":"App_App-content__3fcGm","App-footer":"App_App-footer__r81Tu","pull-left":"App_pull-left__1-Yko","App-link":"App_App-link__3IV_R"}},function(e,t,n){e.exports={container:"FAQBanner_container__IAfJe",entity:"FAQBanner_entity__1_ZyI",inner:"FAQBanner_inner__2bQhu",question:"FAQBanner_question__do07V",answer:"FAQBanner_answer__1gbke"}},,,,,,function(e,t,n){e.exports={title:"About_title__3iRY9",section:"About_section__2tCmJ"}},function(e,t,n){e.exports={"styled-nav":"Menu_styled-nav__v3iVD",slide:"Menu_slide__10Jgh","styled-nav-hidden":"Menu_styled-nav-hidden__sSN-u",cross:"Menu_cross__22zjj"}},,,,,,function(e){e.exports=JSON.parse('[{"id":1,"question":"What does EOFIS mean?","answer":"Eo Fis is an Old Irish phrase meaning the Salmon of Knowledge, a legendary salmon who, when eaten, would give anyone access to all the world\'s knowledge."},{"id":2,"question":"I like what I see. How can I invest/find out more?","answer":"Contact us!! We want to talk to you. You can use the contact form above or reach out to us directly at one of the following emails: marysol@eofis.ie or tiarnach@eofis.ie"},{"id":3,"question":"This looks really interesting! How can I get started using Eofis?","answer":"The Eofis team are busy building the application for you. We are on track to having an MVP created before December 2022. Please use the contact form above and let us know if you want to try it out!"}]')},function(e,t,n){e.exports={home:"Home_home__w2h3L"}},,,function(e,t,n){e.exports={confirmSubscription:"ConfirmSubscription_confirmSubscription__2wify"}},function(e,t,n){e.exports={socialLinkedIn:"LinkedIn_socialLinkedIn__SI8Dv"}},function(e,t,n){e.exports={logo:"Logo_logo__38pPN"}},function(e,t,n){e.exports={"styled-menu-btn":"Burger_styled-menu-btn__1LqAf"}},,,,,,,,function(e,t,n){},,,,,,,,function(e,t,n){"use strict";n.r(t);var i=n(1),s=n.n(i),c=n(18),r=n.n(c),a=(n(43),n(10)),o=n(14),l=n.n(o),d=n(11),j=n(3),h=n(20),u=n(9),b=n(36),m=n(17),O=n(15),p=n.n(O),x=n(0),f=["children"],g=["children"],v=["children"],w=["children"],_=s.a.createContext(null);function y(e){var t=e.children,n=Object(m.a)(e,f);return Object(x.jsx)("div",Object(u.a)(Object(u.a)({className:p.a.container},n),{},{children:Object(x.jsx)("div",{className:p.a.Inner,children:t})}))}y.Entity=function(e){var t=e.children,n=Object(m.a)(e,g),s=Object(i.useState)(!1),c=Object(a.a)(s,2),r=c[0],o=c[1];return Object(x.jsx)(_.Provider,{value:{open:r,setOpen:o},children:Object(x.jsx)("div",Object(u.a)(Object(u.a)({className:p.a.entity},n),{},{children:t}))})},y.Question=function(e){var t=e.children,n=Object(m.a)(e,v),i=s.a.useContext(_),c=i.open,r=i.setOpen;return Object(x.jsxs)("div",Object(u.a)(Object(u.a)({className:p.a.question,onClick:function(){return r((function(e){return!e}))}},n),{},{children:[t,c?Object(x.jsx)("h3",{children:"^"}):Object(x.jsx)("h3",{children:"+"})]}))},y.Text=function(e){var t=e.children,n=Object(m.a)(e,w);return s.a.useContext(_).open?Object(x.jsx)("p",Object(u.a)(Object(u.a)({className:p.a.answer},n),{},{children:t})):null};var A=n(28),C=n(23),N=(n(45),function(){var e={from_name:"",user_email:"",message:""},t=Object(i.useState)(e),n=Object(a.a)(t,2),s=n[0],c=n[1],r=function(e){var t=e.target.name,n=e.target.value;c((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(h.a)({},t,n))}))};return Object(x.jsxs)("div",{className:"centreContent",children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"Contact Us"}),Object(x.jsx)("h2",{children:"Have questions?"}),Object(x.jsx)("h3",{children:"Check out our FAQs below or get in touch if you don't find your answer"}),Object(x.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=t.target;b.a.sendForm("contact_service","contact_form_temp",n,"19ERP2s4UApNutDUw").then((function(t){console.log(t.text),c(Object(u.a)({},e))}),(function(e){console.log(e.text)})),C.b.success("Contact form successfully submitted!",{position:C.b.POSITION.BOTTOM_RIGHT})},children:[Object(x.jsx)("input",{type:"text",name:"from_name",placeholder:"Name",value:s.from_name,onChange:r}),Object(x.jsx)("input",{type:"text",name:"user_email",placeholder:"Email",value:s.user_email,onChange:r}),Object(x.jsx)("textarea",{name:"message",placeholder:"Message",value:s.message,onChange:r}),Object(x.jsx)("input",{type:"submit",value:"Send"})]}),Object(x.jsx)(C.a,{})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"Frequently Asked Questions"}),Object(x.jsx)(y,{children:A.map((function(e){return Object(x.jsxs)(y.Entity,{children:[Object(x.jsx)(y.Question,{children:e.question}),Object(x.jsx)(y.Text,{children:e.answer})]},e.id)}))})]})]})}),k=n(29),L=n.n(k),I=n.p+"static/media/decorativeConceptMap.23511e31.svg",S=n.p+"static/media/logo.1f4439b5.svg",P=function(){var e=Object(i.useRef)(null),t=function(e){var t=Object(i.useState)(!1),n=Object(a.a)(t,2),s=n[0],c=n[1],r=Object(i.useMemo)((function(){return new IntersectionObserver((function(e){var t=Object(a.a)(e,1)[0];return c(t.isIntersecting)}))}),[]);return Object(i.useEffect)((function(){return e.current&&r.observe(e.current),function(){r.disconnect()}}),[e,r]),s}(e);return t&&e.current&&e.current.classList.add("underlay-animation"),!t&&e.current&&e.current.classList.remove("underlay-animation"),Object(x.jsxs)("div",{className:L.a.home,children:[Object(x.jsx)("div",{className:"full-height-screen",children:Object(x.jsxs)("div",{className:"full-width-container",children:[Object(x.jsxs)("div",{className:"massive-message",children:[Object(x.jsxs)("h2",{children:["Automatically generated flashcards and concept maps.",Object(x.jsx)("br",{}),"All in one place."]}),Object(x.jsxs)("h3",{children:["Select your text. ",Object(x.jsx)("strong",{children:"We do the rest."})]})]}),Object(x.jsx)("div",{children:Object(x.jsx)("img",{title:"Concept map diagram",alt:"Concept map",src:I})})]})}),Object(x.jsx)("div",{className:"full-height-screen",style:{background:"var(--colour-light-bg)"},children:Object(x.jsxs)("div",{className:"full-width-container w1-2 with-underlay",children:[Object(x.jsxs)("div",{ref:e,children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("h4",{children:"No-hassle generated quizzes"}),Object(x.jsx)("p",{children:"Our automatic generation models work to turn your text into flashcards that capture the key points of your text. Using state of the art natural processing eofis turns any text into a set of flashcards that we store in your concept map and show you in a quiz just when you need to remember them."})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("h4",{children:"Automatic study timetable"}),Object(x.jsx)("p",{children:"Remember anything you want with the proven spaced repetition study method. Eofis shows you what you need to study exactly when you need to study it. We know you have a lot going on so don't worry if you miss a day here and there, eofis will just reschedule your learning and you can pick up where you left off."})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("h4",{children:"Organise and link your notes"}),Object(x.jsx)("p",{children:"Never lose a note again with our automatic yet personalisable visual concept map that links everything together. Create topics to group your learning, set colours and images to help you remember, shape the map however it helps you, eofis is here to help."})]})]}),Object(x.jsx)("div",{className:"underlay-container",children:Object(x.jsxs)("div",{children:[Object(x.jsx)("h4",{children:"Connections aren't just for data..."}),Object(x.jsx)("p",{children:"Do you like to study like a lone wolf or prefer to run with the pack? We've got you covered either way with our opt-in powerful group learning system. Create study groups, informal competitions or just put the head down and crack on."})]})})]})}),Object(x.jsx)("div",{className:"full-height-screen w1-2 call-to-link-box",children:Object(x.jsxs)("div",{className:"full-width-container w1-2 call-to-link-box",children:[Object(x.jsx)("img",{src:S}),Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{children:"Start your certification journey with eofis tech."}),Object(x.jsx)("h2",{children:"Learn, manage, and track your progress on the go."}),Object(x.jsx)("h2",{children:Object(x.jsx)(d.b,{to:"/tech",children:"Get Started"})})]})]})})]})};var E=n(32),T=n.n(E),F=function(){return Object(x.jsxs)("div",{className:T.a.confirmSubscription,children:[Object(x.jsx)("h1",{children:"Thank you!"}),Object(x.jsx)("p",{children:"Thanks for signing up to hear more from us."}),Object(x.jsx)("p",{children:"We'll keep you up to date with everything new about eofis."})]})},M=n(33),Q=n.n(M),B=function(e){return Object(x.jsx)("a",{className:Q.a.socialLinkedIn,href:e.url,rel:"noreferrer",target:"_blank",title:"Linkedin profile of ".concat(e.name),children:Object(x.jsx)("svg",{viewBox:"7 7 30 30",style:{borderRadius:"20%"},xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:Object(x.jsx)("g",{children:Object(x.jsx)("path",{id:"f_1_",d:"M12.5044685,18.4131131 L16.4026341,18.4131131 L16.4026341,31.9987194 L12.5044685,31.9987194 L12.5044685,18.4131131 Z M14.3541863,16.7137918 L14.3259643,16.7137918 C12.9148636,16.7137918 12,15.6752465 12,14.3600973 C12,13.0180561 12.9419097,12 14.3812324,12 C15.8193791,12 16.7036689,13.0154949 16.7318909,14.3562556 C16.7318909,15.6714048 15.8193791,16.7137918 14.3541863,16.7137918 L14.3541863,16.7137918 Z M32,32 L27.5797272,32 L27.5797272,24.9683698 C27.5797272,23.1281854 26.8882879,21.8732232 25.3678269,21.8732232 C24.2048448,21.8732232 23.5580903,22.7196824 23.2570555,23.537969 C23.1441675,23.8299398 23.1618062,24.2384428 23.1618062,24.6482264 L23.1618062,32 L18.7826905,32 C18.7826905,32 18.8391345,19.5451402 18.7826905,18.4131131 L23.1618062,18.4131131 L23.1618062,20.5452683 C23.420508,19.6130106 24.8198495,18.2824946 27.0529163,18.2824946 C29.8233772,18.2824946 32,20.2379306 32,24.4446152 L32,32 L32,32 Z"})})})})},G=n(13),U=n.n(G),H=function(e){var t=e.people;return Object(x.jsx)("div",{className:U.a.personList,children:t.map((function(e,t){return Object(x.jsxs)("div",{className:U.a.personListItem,children:[Object(x.jsx)("img",{src:e.imageSrc}),Object(x.jsxs)("div",{className:U.a.textContainer,children:[Object(x.jsx)("h2",{children:e.name}),Object(x.jsx)("h4",{children:e.position}),Object(x.jsx)("div",{className:U.a.description,children:e.description.split("\n").map((function(e,t){return Object(x.jsx)("p",{children:e},t)}))}),e.linkedInURL&&Object(x.jsx)("div",{className:U.a.socials}),Object(x.jsx)("span",{className:U.a.socialBanner,children:e.linkedInURL&&Object(x.jsx)(B,{url:e.linkedInURL,name:e.name})})]})]},t)}))})},J=n(21),R=n.n(J),D=function(){var e=Object(i.useRef)(null),t=Object(i.useRef)(null),n=Object(i.useRef)(null),s=function(e){null!=e.current&&window.scrollTo({top:e.current.offsetTop,behavior:"smooth"})},c=Object(i.useRef)(null),r=function(e){var t=Object(i.useState)(!1),n=Object(a.a)(t,2),s=n[0],c=n[1],r=Object(i.useMemo)((function(){return new IntersectionObserver((function(e){var t=Object(a.a)(e,1)[0];return c(t.isIntersecting)}))}),[]);return Object(i.useEffect)((function(){return e.current&&r.observe(e.current),function(){r.disconnect()}}),[e,r]),s}(c);return r&&c.current&&c.current.classList.add("underlay-animation"),!r&&c.current&&c.current.classList.remove("underlay-animation"),Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"full-height-screen",children:Object(x.jsxs)("div",{className:"full-width-container w1-2",children:[Object(x.jsxs)("div",{className:R.a.title,children:[Object(x.jsx)("h1",{children:"This is Us."}),Object(x.jsx)("h2",{onClick:function(){return s(e)},children:"#ourstory"}),Object(x.jsx)("h2",{onClick:function(){return s(e)},children:"#foundersjourney"}),Object(x.jsx)("h2",{onClick:function(){return s(t)},children:"#ourmission"}),Object(x.jsx)("h2",{onClick:function(){return s(n)},children:"#theteam"})]}),Object(x.jsx)("img",{title:"Eofis Logo",src:S,alt:"Eofis logo"})]})}),Object(x.jsx)("div",{ref:e,className:"full-height-screen",children:Object(x.jsxs)("div",{className:"full-width-container w1-2",children:[Object(x.jsxs)("div",{className:R.a.section,children:[Object(x.jsx)("h1",{children:"Our Story"}),Object(x.jsx)("h2",{children:"We're a team of young entrepreneurs with a new take on an old idea. We saw the power of modern natural language processing and saw it could help people learn more effectively and efficiently."}),Object(x.jsx)("h2",{children:"At Eofis, we recognize that we live in a knowledge economy. The human brain is only as powerful as the information it has available. We believe that the right approach and technological assistance can trigger the next great leap in human understanding."}),Object(x.jsx)("h2",{children:"We build our software in constant communication with our clients and are deeply grateful for all the support and feedback we receive."})]}),Object(x.jsx)("img",{title:"Founder Headshot Picture",src:"img/mnt.webp",alt:"Founders",style:{flexGrow:0,width:"25%"}})]})}),Object(x.jsx)("div",{ref:t,className:"full-height-screen-column",children:Object(x.jsxs)("div",{className:R.a.section,children:[Object(x.jsx)("h1",{children:"Our Mission"}),Object(x.jsx)("div",{className:"full-width-container w1-2 with-circle-underlay",children:Object(x.jsxs)("div",{ref:c,children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{children:"Envision"}),Object(x.jsx)("h4",{children:"Creating a personal Internet of Knowledge"})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{children:"Enable"}),Object(x.jsx)("h4",{children:"Allowing individuals to gather all their learning in one place: The Eofis Concept Map"})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{children:"Empower"}),Object(x.jsx)("h4",{children:"Making learning accessible to everyone from everywhere"})]})]})})]})}),Object(x.jsx)("div",{className:"full-height-screen-column",children:Object(x.jsxs)("div",{ref:n,children:[Object(x.jsx)("h1",{style:{color:"black"},children:"Meet the team"}),Object(x.jsx)(H,{people:[{imageSrc:"img/tiarnach.jpg",name:"Tiarnach \xd3 Riada",position:"CTO, Co-founder",linkedInURL:"https://www.linkedin.com/in/tiarnachreidy/",description:"BEng Electronics\nSoftware Developer at Spanish Point Tech.\n                        Tiarnach coordinates and implements the technical vision of eofis as the lead developer. He developed the core proof of concept as his bachelor's thesis at UCD and is currently hard at work somewhere badly lit."},{imageSrc:"img/marysol1.jpg",name:"Marysol Angeloni",position:"CEO, Co-founder",linkedInURL:"https://www.linkedin.com/in/marysol-angeloni-637810194/",description:"MSc Management, BA History and Politics\nStartup coordinator at Web Summit\n                        Marysol has been starting businesses since 2018 when she started GiftIt, a nonprofit to allow people to donate their skills in the aid of charities.\n                        She's passionate about prototyping and customer-focused development."},{imageSrc:"img/shivam1.jpg",name:"Shivam Agarwal",position:"Financial Advisor",linkedInURL:"https://www.linkedin.com/in/shivam-agarwal-8a625a5b/",description:"PhD candidate in Finance and Operational Risk at UCD\n                        Shivam defines our financial models and conducts market research. His advice and hard work as team member contributes to meaningful, finance-oriented conversations with potential investors."},{imageSrc:"img/sophie1.png",name:"Sophie Cassidy",position:"Technical Advisor",linkedInURL:"https://www.linkedin.com/in/scassidy04/",description:"BEngSc, MEng Mechanical\nGraduate software engineer at Vodafone.\n                        Sophie was a fellow participant in the NovaUCD Student Enterprise Competition with FloMo. Sophie bridges the technical and business worlds, and shares her tech expertise to guide the development of eofis."}]})]})})]})};var q=n(37),V=n(5),W=n.n(V),Z=n(52),X=n(53),Y=n(54),z=n(55),K=function(){return Object(x.jsxs)("div",{className:W.a.animationContainer,children:[Object(x.jsx)("div",{className:W.a.document,children:Object(q.a)(Array(50)).map((function(e,t){return Object(x.jsx)("div",{className:W.a.textLine+" "+(t>10&&t<30&&W.a.highlight),style:{"--h-n":t-10}},t)}))}),Object(x.jsx)("div",{className:W.a.logoQG,children:Object(x.jsx)("img",{src:S})}),Object(x.jsxs)("div",{className:W.a.cardsContainer,children:[Object(x.jsxs)("div",{className:W.a.card,children:[Object(x.jsx)("div",{className:W.a.front,children:Object(x.jsx)(Z.a,{})}),Object(x.jsx)("div",{className:W.a.title,children:"Learn"})]}),Object(x.jsxs)("div",{className:W.a.card,children:[Object(x.jsx)("div",{className:W.a.front,children:Object(x.jsx)(X.a,{})}),Object(x.jsx)("div",{className:W.a.title,children:"Schedule"})]}),Object(x.jsxs)("div",{className:W.a.card,children:[Object(x.jsx)("div",{className:W.a.front,children:Object(x.jsx)(Y.a,{})}),Object(x.jsx)("div",{className:W.a.title,children:"Analyse"})]}),Object(x.jsxs)("div",{className:W.a.card,children:[Object(x.jsx)("div",{className:W.a.front,children:Object(x.jsx)(z.a,{})}),Object(x.jsx)("div",{className:W.a.title,children:"Connect"})]})]})]})},$=function(){return Object(x.jsxs)("div",{className:"colour-tile-list",children:[Object(x.jsx)("h1",{children:"Here's how eofis works..."}),Object(x.jsx)("div",{className:"full-height-screen",children:Object(x.jsxs)("div",{className:"full-width-container w1-2",children:[Object(x.jsxs)("div",{className:"blob-headed-message",children:[Object(x.jsx)("h2",{children:"STEP\xa01:\xa0CHOOSE"}),Object(x.jsx)("h3",{children:"Highlight the text you want to learn"}),Object(x.jsx)("p",{children:"Select your text and send it to the eofis browser extension."}),Object(x.jsx)("p",{children:"Eofis browser extension works on"}),Object(x.jsxs)("ul",{className:"tick-list",children:[Object(x.jsx)("li",{children:"Chrome"}),Object(x.jsx)("li",{children:"Firefox"}),Object(x.jsx)("li",{className:"skip",children:"on"}),Object(x.jsx)("li",{children:"Windows"}),Object(x.jsx)("li",{children:"Mac OS"}),Object(x.jsx)("li",{children:"Linux"})]})]}),Object(x.jsx)("div",{children:Object(x.jsx)(K,{})})]})}),Object(x.jsx)("div",{className:"full-height-screen",children:Object(x.jsxs)("div",{className:"full-width-container w1-2",children:[Object(x.jsxs)("div",{className:"blob-headed-message",children:[Object(x.jsx)("h2",{children:"STEP\xa02:\xa0MAGIC!"}),Object(x.jsx)("h3",{children:"Flashcards, quizzes and notes are automatically generated and organised from the text"}),Object(x.jsx)("p",{children:"Eofis automatically generates flashcards and a personal concept map, complete with reminders to practice your learning."})]}),Object(x.jsx)("div",{children:Object(x.jsx)("img",{title:"Image showing concept map",src:I})})]})}),Object(x.jsx)("div",{className:"full-height-screen",children:Object(x.jsxs)("div",{className:"full-width-container w1-2",children:[Object(x.jsxs)("div",{className:"blob-headed-message",children:[Object(x.jsx)("h2",{children:"STEP\xa03:\xa0PRACTICE"}),Object(x.jsx)("h3",{children:"Practice makes perfect!"}),Object(x.jsx)("p",{children:"Practice your learning using eofis' flashcards and a sophisticated scheduling algorithm to maximise your learning."})]}),Object(x.jsx)("div",{children:Object(x.jsx)("img",{title:"Image showing question being practiced",src:"img/PracticeCard.png",style:{maxWidth:"816px"}})})]})}),Object(x.jsx)("div",{className:"full-height-screen",children:Object(x.jsxs)("div",{className:"full-width-container w1-2",children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{children:"Still wondering how eofis works?"}),Object(x.jsx)("h4",{children:Object(x.jsx)("strong",{children:"See it in action"})})]}),Object(x.jsx)("div",{children:Object(x.jsxs)("video",{controls:!0,children:[Object(x.jsx)("source",{src:"https://drive.google.com/u/0/uc?id=10xBdQBQJuQiIfMb_KqJgBx9TWdrSUyQJ&export=download",type:"video/mp4"}),"This video could not be loaded"]})})]})})]})},ee=n(34),te=n.n(ee),ne=function(e){var t=e.image;return Object(x.jsxs)("div",{className:te.a.logo,children:[t&&Object(x.jsx)("img",{src:S}),Object(x.jsx)("span",{children:"eofis"})]})},ie=n(56),se=n(35),ce=n.n(se),re=function(e){var t=e.setOpen;return Object(x.jsxs)("div",{onClick:function(){t((function(e){return!e}))},className:ce.a["styled-menu-btn"],children:[Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{})]})},ae=n(22),oe=n.n(ae),le=function(e){var t=e.open,n=e.setOpen;return Object(x.jsxs)("div",{className:t?oe.a["styled-nav"]:oe.a["styled-nav-hidden"],children:[Object(x.jsx)("div",{className:oe.a.cross,onClick:function(){n((function(e){return!e}))},children:Object(x.jsx)("img",{alt:"Exit menu",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAACjklEQVR4nO3bzW7TQBTF8T9QSsICFnTZICF4AHgxEEJUCImuCjwZC1REAamtQETQvgQfahsW7hCw4tjxzNy54POTvCVnTi/jjzggIiIiIiIiIiIiIiL/jUuZ//014AIwy/w5sdapMnrP+ZdrwFPgEPgJnAIfgMfAuGCuujGwBexTZfwBfASeANcL5urkNvCZ+XTUj/fApFi6uQnVH78p5yfgTrF0La4CX2gOH44pcLNQRs4/e7og16Kcnv4H/vaM9vCly+5acji2C2Rs9Y7uC5gBX4FbhvkmLN/WFh17hvk6WaM6oayyCMvJXnWSw3EKXDTIt5LvrL4Qi8nuM8nh+JYxV29v6beYnJPdd5LD8SZDpmgP6L+gHGXHljwD7ifMk8xl4BVxC0u1jcRsF+F4TXXH6NIm8VMUO9kpJnl6vhbXUkxT38ku+dlFlFjw4EoOLBc+2JIDiwIGX3KQswiVXJOjEJXcIGUxKrlFqmvc0tfq/4QU06hJ7qhU2YMqObAue5AlB1ZlD7rkIHfZKvkPucpWyQukLlslL5GqbHclu/uGV/LT1mFAJ0MDurwzoBsWA7oFN6CHSgb0mNSAHvwb0FdZBvTlrAG9bmBAL9AY0CthBvSSowG9tmtAL6IbGAG7+JimFJO9R/VrYHe28FFykKLsRwnzJHNIue2iSew2cpAhU5QrwAk+JrkuZrJPcPbLrDFwhr+Sg75ln1Gde1w5xsd20aTPNnJkmK+zl/ib5LpVJ3unQMZWG3Sb6tLPgrtO9jFwo1DGVvdYXvYuPm4ENql+UL9sy7hbLF1HG8ALqrDhzL0PPMTXiWVEdZ18wPyK6Qh4juNJbjLC2eVRg3V8DYGIiIiIiIiIiIiIiHj2C7JZ0iJqGli7AAAAAElFTkSuQmCC"})}),Object(x.jsx)(d.b,{to:"/about",onClick:function(){n((function(e){return!e}))},children:"More about us."}),Object(x.jsx)(d.b,{to:"/tech",onClick:function(){n((function(e){return!e}))},children:"Techy Stuff."}),Object(x.jsx)(d.b,{to:"/contact",onClick:function(){n((function(e){return!e}))},children:"Contact."})]})},de=function(){var e,t,n=Object(i.useState)(!1),s=Object(a.a)(n,2),c=s[0],r=s[1],o=Object(i.useRef)(null);return e=o,t=function(){return r(!1)},Object(i.useEffect)((function(){var n=function(n){e.current&&!e.current.contains(n.target)&&t(n)};return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),[e,t]),Object(x.jsxs)("div",{className:l.a.App,children:[Object(x.jsx)("header",{className:l.a["App-header"],children:Object(x.jsxs)("nav",{children:[Object(x.jsx)(d.b,{to:"/",className:l.a["pull-left"],children:Object(x.jsx)(ne,{image:!0})}),Object(x.jsxs)("div",{ref:o,children:[Object(x.jsx)(re,{open:c,setOpen:r}),Object(x.jsx)(le,{open:c,setOpen:r})]})]})}),Object(x.jsx)("div",{className:l.a["App-content"],children:Object(x.jsxs)(j.c,{children:[Object(x.jsx)(j.a,{path:"/tech",children:Object(x.jsx)($,{})}),Object(x.jsx)(j.a,{path:"/about",children:Object(x.jsx)(D,{})}),Object(x.jsx)(j.a,{path:"/contact",children:Object(x.jsx)(N,{})}),Object(x.jsx)(j.a,{path:"/confirm-subscription",children:Object(x.jsx)(F,{})}),Object(x.jsx)(j.a,{path:"/",children:Object(x.jsx)(P,{})})]})}),Object(x.jsx)("footer",{className:l.a["App-footer"],children:Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{children:[Object(x.jsx)(ne,{image:!0}),Object(x.jsxs)("div",{children:["Made with ",Object(x.jsx)(ie.a,{color:"red"})," in \xc9ire"]}),"\xa9 eofis ltd 2022"]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("h4",{children:"Help & Support"}),Object(x.jsx)(d.b,{to:"/contact",children:"Contact Us"})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("h4",{children:"Social"}),Object(x.jsx)(B,{name:"eofis",url:"https://www.linkedin.com/company/eofis-ie/"})]})]})})]})},je=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,57)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),i(e),s(e),c(e),r(e)}))};r.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(d.a,{children:Object(x.jsx)(de,{})})}),document.getElementById("root")),je()}],[[51,1,2]]]);
//# sourceMappingURL=main.d93a376e.chunk.js.map