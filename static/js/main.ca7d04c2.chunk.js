(this["webpackJsonpeofis-web"]=this["webpackJsonpeofis-web"]||[]).push([[0],{12:function(e,t,n){e.exports={personList:"PersonList_personList__2qVF3",personListItem:"PersonList_personListItem__2lScn",description:"PersonList_description__2VD2L",socialBanner:"PersonList_socialBanner__2Z0Ms",textContainer:"PersonList_textContainer__fVnfl"}},13:function(e,t,n){e.exports={App:"App_App__1DKa7","App-logo":"App_App-logo__1Uawt","App-logo-spin":"App_App-logo-spin__AjbbL","App-header":"App_App-header__3Ghwo","App-content":"App_App-content__3fcGm","App-footer":"App_App-footer__r81Tu","pull-left":"App_pull-left__1-Yko","App-link":"App_App-link__3IV_R"}},23:function(e,t,n){e.exports={title:"About_title__3iRY9",section:"About_section__2tCmJ"}},24:function(e,t,n){e.exports={"styled-nav":"Menu_styled-nav__v3iVD","styled-nav-hidden":"Menu_styled-nav-hidden__sSN-u",cross:"Menu_cross__22zjj"}},37:function(e){e.exports=JSON.parse('[{"id":1,"question":"What does EOFIS mean?","answer":"Eo Fis is an Old Irish phrase meaning the Salmon of Knowledge, a legendary salmon who, when eaten, would give anyone access to all the world\'s knowledge."},{"id":2,"question":"I like what I see. How can I invest/find out more?","answer":"Contact us!! We want to talk to you. You can use the contact form above or reach out to us directly at one of the following emails: marysol@eofis.ie or tiarnach@eofis.ie"},{"id":3,"question":"This looks really interesting! How can I get started using Eofis?","answer":"The Eofis team are busy building the application for you. We are on track to having an MVP created before December 2022. Please use the contact form above and let us know if you want to try it out!"}]')},38:function(e,t,n){e.exports={home:"Home_home__w2h3L"}},40:function(e,t,n){e.exports={confirmSubscription:"ConfirmSubscription_confirmSubscription__2wify"}},41:function(e,t,n){e.exports={socialLinkedIn:"LinkedIn_socialLinkedIn__SI8Dv"}},42:function(e,t,n){e.exports={logo:"Logo_logo__38pPN"}},43:function(e,t,n){e.exports={"styled-menu-btn":"Burger_styled-menu-btn__1LqAf"}},50:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),s=n(20),r=n.n(s),a=(n(50),n(10)),o=n(13),l=n.n(o),d=n(5),j=n(3),h=n(22),u=n(9),b=n(44),p=n(18),m=n(14),x=m.a.div.withConfig({displayName:"FAQBannerStyle__Container",componentId:"sc-1ku0bp1-0"})(["padding:5px"]),O=m.a.div.withConfig({displayName:"FAQBannerStyle__Entity",componentId:"sc-1ku0bp1-1"})(["width:99%;margin:auto;"]),f=m.a.div.withConfig({displayName:"FAQBannerStyle__Inner",componentId:"sc-1ku0bp1-2"})(["padding:75px 40px;margin:auto;flex-direction:column;display:flex;"]),g=m.a.div.withConfig({displayName:"FAQBannerStyle__Question",componentId:"sc-1ku0bp1-3"})(["border-bottom:3px solid #070707;font:25px;justify-content:space-between;cursor:pointer;margin:10px;display:flex;font-weight:bold;padding:0 1.12em;align-items:center;"]),v=m.a.p.withConfig({displayName:"FAQBannerStyle__Text",componentId:"sc-1ku0bp1-4"})(["border-bottom:3px solid #070707;max-height:1190px;font-size:16px;font-weight:500;line-height:normal;transition:max-height 0.23s cubic-bezier(0.4,0,0.2,1);padding:0em 1.12em 0.75em 1.12em;user-select:none;margin:10px;"]),w=n(0),y=["children"],k=["children"],A=["children"],_=["children"],C=c.a.createContext(null);function N(e){var t=e.children,n=Object(p.a)(e,y);return Object(w.jsx)(x,Object(u.a)(Object(u.a)({},n),{},{children:Object(w.jsx)(f,{children:t})}))}N.Entity=function(e){var t=e.children,n=Object(p.a)(e,k),c=Object(i.useState)(!1),s=Object(a.a)(c,2),r=s[0],o=s[1];return Object(w.jsx)(C.Provider,{value:{open:r,setOpen:o},children:Object(w.jsx)(O,Object(u.a)(Object(u.a)({},n),{},{children:t}))})},N.Question=function(e){var t=e.children,n=Object(p.a)(e,A),i=c.a.useContext(C),s=i.open,r=i.setOpen;return Object(w.jsxs)(g,Object(u.a)(Object(u.a)({onClick:function(){return r((function(e){return!e}))}},n),{},{children:[t,s?Object(w.jsx)("h3",{children:"^"}):Object(w.jsx)("h3",{children:"+"})]}))},N.Text=function(e){var t=e.children,n=Object(p.a)(e,_);return c.a.useContext(C).open?Object(w.jsx)(v,Object(u.a)(Object(u.a)({},n),{},{children:t})):null};var L=n(37),S=n(25),I=(n(54),function(){var e={from_name:"",user_email:"",message:""},t=Object(i.useState)(e),n=Object(a.a)(t,2),c=n[0],s=n[1],r=function(e){var t=e.target.name,n=e.target.value;s((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(h.a)({},t,n))}))};return Object(w.jsxs)("div",{className:"centreContent",children:[Object(w.jsxs)("div",{children:[Object(w.jsx)("h1",{children:"Contact Us"}),Object(w.jsx)("h2",{children:"Have questions?"}),Object(w.jsx)("h3",{children:"Check out our FAQs below or get in touch if you don't find your answer"}),Object(w.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=t.target;b.a.sendForm("contact_service","contact_form_temp",n,"19ERP2s4UApNutDUw").then((function(t){console.log(t.text),s(Object(u.a)({},e))}),(function(e){console.log(e.text)})),S.b.success("Contact form successfully submitted!",{position:S.b.POSITION.BOTTOM_RIGHT})},children:[Object(w.jsx)("input",{type:"text",name:"from_name",placeholder:"Name",value:c.from_name,onChange:r}),Object(w.jsx)("input",{type:"text",name:"user_email",placeholder:"Email",value:c.user_email,onChange:r}),Object(w.jsx)("textarea",{name:"message",placeholder:"Message",value:c.message,onChange:r}),Object(w.jsx)("input",{type:"submit",value:"Send"})]}),Object(w.jsx)(S.a,{})]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("h1",{children:"Frequently Asked Questions"}),Object(w.jsx)(N,{children:L.map((function(e){return Object(w.jsxs)(N.Entity,{children:[Object(w.jsx)(N.Question,{children:e.question}),Object(w.jsx)(N.Text,{children:e.answer})]},e.id)}))})]})]})}),E=n(38),T=n.n(E),F=n.p+"static/media/decorativeConceptMap.23511e31.svg",M=n(61),P=n(62),B=n(63),H=n(64),Q=n(65),R=n(66),U=n(67),J=n.p+"static/media/logo.1f4439b5.svg",D=function(){return Object(w.jsxs)("div",{className:T.a.home,children:[Object(w.jsx)("div",{className:"full-height-screen",children:Object(w.jsxs)("div",{className:"full-width-container",children:[Object(w.jsxs)("div",{className:"massive-message",children:[Object(w.jsxs)("h2",{children:["Automatically generated flashcards and concept maps.",Object(w.jsx)("br",{}),"All in one place."]}),Object(w.jsxs)("h3",{children:["Select your text. ",Object(w.jsx)("strong",{children:"We do the rest."})]})]}),Object(w.jsx)("div",{children:Object(w.jsx)("img",{title:"Concept map diagram",src:F})})]})}),Object(w.jsx)("div",{className:"full-height-screen",style:{background:"var(--colour-light-bg)"},children:Object(w.jsxs)("div",{className:"full-width-container w1-2 with-underlay",children:[Object(w.jsxs)("div",{children:[Object(w.jsxs)("div",{children:[Object(w.jsxs)("div",{className:"icon-container",children:[Object(w.jsx)(M.a,{}),Object(w.jsx)(P.a,{})]}),Object(w.jsx)("h4",{children:"No-hassle generated quizzes"}),Object(w.jsx)("p",{children:"Our automatic generation models work to turn your text into flashcards that capture the key points of your text. Using state of the art natural processing eofis turns any text into a set of flashcards that we store in your concept map and show you in a quiz just when you need to remember them."})]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("div",{className:"icon-container",children:Object(w.jsx)(B.a,{})}),Object(w.jsx)("h4",{children:"Automatic study timetable"}),Object(w.jsx)("p",{children:"Remember anything you want with the proven spaced repetition study method. Eofis shows you what you need to study exactly when you need to study it. We know you have a lot going on so don't worry if you miss a day here and there, eofis will just reschedule your learning and you can pick up where you left off."})]}),Object(w.jsxs)("div",{children:[Object(w.jsxs)("div",{className:"icon-container",children:[Object(w.jsx)(H.a,{}),Object(w.jsx)(Q.a,{}),Object(w.jsx)(R.a,{})]}),Object(w.jsx)("h4",{children:"Organise and link your notes"}),Object(w.jsx)("p",{children:"Never lose a note again with our automatic yet personalisable visual concept map that links everything together. Create topics to group your learning, set colours and images to help you remember, shape the map however it helps you, eofis is here to help."})]})]}),Object(w.jsx)("div",{className:"underlay-container",children:Object(w.jsxs)("div",{children:[Object(w.jsx)("div",{className:"icon-container",children:Object(w.jsx)(U.a,{})}),Object(w.jsx)("h4",{children:"Connections aren't just for data..."}),Object(w.jsx)("p",{children:"Do you like to study like a lone wolf or prefer to run with the pack? We've got you covered either way with our opt-in powerful group learning system. Create study groups, informal competitions or just put the head down and crack on."})]})})]})}),Object(w.jsx)("div",{className:"full-height-screen w1-2 call-to-link-box",children:Object(w.jsxs)("div",{className:"full-width-container w1-2 call-to-link-box",children:[Object(w.jsx)("img",{src:J}),Object(w.jsxs)("div",{children:[Object(w.jsx)("h2",{children:"Start your certification journey with eofis tech."}),Object(w.jsx)("h2",{children:"Learn, manage, and track your progress on the go."}),Object(w.jsx)("h2",{children:Object(w.jsx)(d.b,{to:"/tech",children:"Get Started"})})]})]})})]})},G=n(40),W=n.n(G),q=function(){return Object(w.jsxs)("div",{className:W.a.confirmSubscription,children:[Object(w.jsx)("h1",{children:"Thank you!"}),Object(w.jsx)("p",{children:"Thanks for signing up to hear more from us."}),Object(w.jsx)("p",{children:"We'll keep you up to date with everything new about eofis."})]})},V=n(32),z=n(19),Z=n(29),X=n(30),K=n(31),Y=(n(59),function(){var e=Object(Z.a)(Object(z.a)().mark((function e(t){return Object(z.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/blogs/".concat(t,".md")).then(function(){var e=Object(Z.a)(Object(z.a)().mark((function e(n){var i;return Object(z.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.ok){e.next=2;break}throw new Error("Error loading ".concat(t));case 2:return e.next=4,n.text();case 4:return i=e.sent,e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),$=function(){var e=Object(i.useState)([]),t=Object(a.a)(e,2),n=t[0],c=t[1],s=Object(j.f)().id,r=Object(i.useState)(),o=Object(a.a)(r,2),l=o[0],h=o[1];Object(i.useEffect)((function(){s&&Y(s).then((function(e){return h(Object(K.sanitize)(X.marked.parse(e)))}))}),[s]);Object(i.useEffect)((function(){u()}),[]);var u=function(){var e=Object(V.a)(n);e.forEach((function(t){Y(t.identifier).then((function(e){return t.previewHTML=Object(K.sanitize)(X.marked.parse(e.slice(0,800)))})).then((function(){return c([].concat(Object(V.a)(e.filter((function(e){return e.identifier!==t.identifier}))),[t]))}))}))};return Object(w.jsx)("div",{className:"blog-container",children:s&&l?Object(w.jsx)("div",{dangerouslySetInnerHTML:{__html:l}}):Object(w.jsx)(w.Fragment,{children:n.every((function(e){return void 0!==e.previewHTML}))&&(null===n||void 0===n?void 0:n.map((function(e,t){return Object(w.jsxs)("div",{title:e.title,className:"blog-preview",children:[Object(w.jsx)("div",{dangerouslySetInnerHTML:{__html:e.previewHTML},className:"content"}),Object(w.jsx)(d.b,{to:"/blog/".concat(e.identifier),children:"Read more"})]},t)})))})})},ee=n(41),te=n.n(ee),ne=function(e){return Object(w.jsx)("a",{className:te.a.socialLinkedIn,href:e.url,rel:"noreferrer",target:"_blank",title:"Linkedin profile of ".concat(e.name),children:Object(w.jsx)("svg",{viewBox:"7 7 30 30",style:{borderRadius:"20%"},xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:Object(w.jsx)("g",{children:Object(w.jsx)("path",{id:"f_1_",d:"M12.5044685,18.4131131 L16.4026341,18.4131131 L16.4026341,31.9987194 L12.5044685,31.9987194 L12.5044685,18.4131131 Z M14.3541863,16.7137918 L14.3259643,16.7137918 C12.9148636,16.7137918 12,15.6752465 12,14.3600973 C12,13.0180561 12.9419097,12 14.3812324,12 C15.8193791,12 16.7036689,13.0154949 16.7318909,14.3562556 C16.7318909,15.6714048 15.8193791,16.7137918 14.3541863,16.7137918 L14.3541863,16.7137918 Z M32,32 L27.5797272,32 L27.5797272,24.9683698 C27.5797272,23.1281854 26.8882879,21.8732232 25.3678269,21.8732232 C24.2048448,21.8732232 23.5580903,22.7196824 23.2570555,23.537969 C23.1441675,23.8299398 23.1618062,24.2384428 23.1618062,24.6482264 L23.1618062,32 L18.7826905,32 C18.7826905,32 18.8391345,19.5451402 18.7826905,18.4131131 L23.1618062,18.4131131 L23.1618062,20.5452683 C23.420508,19.6130106 24.8198495,18.2824946 27.0529163,18.2824946 C29.8233772,18.2824946 32,20.2379306 32,24.4446152 L32,32 L32,32 Z"})})})})},ie=n(12),ce=n.n(ie),se=function(e){var t=e.people;return Object(w.jsx)("div",{className:ce.a.personList,children:t.map((function(e,t){return Object(w.jsxs)("div",{className:ce.a.personListItem,children:[Object(w.jsx)("img",{src:e.imageSrc}),Object(w.jsxs)("div",{className:ce.a.textContainer,children:[Object(w.jsx)("h2",{children:e.name}),Object(w.jsx)("h4",{children:e.position}),Object(w.jsx)("div",{className:ce.a.description,children:e.description.split("\n").map((function(e,t){return Object(w.jsx)("p",{children:e},t)}))}),e.linkedInURL&&Object(w.jsx)("div",{className:ce.a.socials}),Object(w.jsx)("span",{className:ce.a.socialBanner,children:e.linkedInURL&&Object(w.jsx)(ne,{url:e.linkedInURL,name:e.name})})]})]},t)}))})},re=n(23),ae=n.n(re),oe=function(){var e=Object(i.useRef)(null),t=Object(i.useRef)(null),n=Object(i.useRef)(null),c=function(e){null!=e.current&&window.scrollTo({top:e.current.offsetTop,behavior:"smooth"})};return Object(w.jsxs)("div",{children:[Object(w.jsx)("div",{className:"full-height-screen",children:Object(w.jsxs)("div",{className:"full-width-container w1-2",children:[Object(w.jsxs)("div",{className:ae.a.title,children:[Object(w.jsx)("h1",{children:"This is Us."}),Object(w.jsx)("h2",{onClick:function(){return c(e)},children:"#ourstory"}),Object(w.jsx)("h2",{onClick:function(){return c(e)},children:"#foundersjourney"}),Object(w.jsx)("h2",{onClick:function(){return c(t)},children:"#ourmission"}),Object(w.jsx)("h2",{onClick:function(){return c(n)},children:"#theteam"})]}),Object(w.jsx)("img",{title:"Eofis Logo",src:J,alt:"Eofis logo"})]})}),Object(w.jsx)("div",{ref:e,className:"full-height-screen",children:Object(w.jsxs)("div",{className:"full-width-container w1-2",children:[Object(w.jsxs)("div",{className:ae.a.section,children:[Object(w.jsx)("h1",{children:"Our Story"}),Object(w.jsx)("h2",{children:"We're a team of young entrepreneurs with a new take on an old idea. We saw the power of modern natural language processing and saw it could help people learn more effectively and efficiently."}),Object(w.jsx)("h2",{children:"At Eofis, we recognize that we live in a knowledge economy. The human brain is only as powerful as the information it has available. We believe that the right approach and technological assistance can trigger the next great leap in human understanding."}),Object(w.jsx)("h2",{children:"We build our software in constant communication with our clients and are deeply grateful for all the support and feedback we receive."})]}),Object(w.jsx)("img",{title:"Founder Headshot Picture",src:"img/mnt.webp",alt:"Founders",style:{flexGrow:0,width:"25%"}})]})}),Object(w.jsx)("div",{ref:t,className:"full-height-screen-column",children:Object(w.jsxs)("div",{className:ae.a.section,children:[Object(w.jsx)("h1",{children:"Our Mission"}),Object(w.jsx)("div",{className:"full-width-container w1-2 with-circle-underlay",children:Object(w.jsxs)("div",{children:[Object(w.jsxs)("div",{children:[Object(w.jsx)("h2",{children:"Envision"}),Object(w.jsx)("h4",{children:"Creating a personal Internet of Knowledge"})]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("h2",{children:"Enable"}),Object(w.jsx)("h4",{children:"Allowing individuals to gather all their learning in one place: The Eofis Concept Map"})]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("h2",{children:"Empower"}),Object(w.jsx)("h4",{children:"Making learning accessible to everyone from everywhere"})]})]})})]})}),Object(w.jsx)("div",{className:"full-height-screen-column",children:Object(w.jsxs)("div",{ref:n,children:[Object(w.jsx)("h1",{style:{color:"black"},children:"Meet the team"}),Object(w.jsx)(se,{people:[{imageSrc:"img/tiarnach.jpg",name:"Tiarnach \xd3 Riada",position:"CTO, Co-founder",linkedInURL:"https://www.linkedin.com/in/tiarnachreidy/",description:"BEng Electronics\nSoftware Developer at Spanish Point Tech.\n                        Tiarnach coordinates and implements the technical vision of eofis as the lead developer. He developed the core proof of concept as his bachelor's thesis at UCD and is currently hard at work somewhere badly lit."},{imageSrc:"img/marysol1.jpg",name:"Marysol Angeloni",position:"CEO, Co-founder",linkedInURL:"https://www.linkedin.com/in/marysol-angeloni-637810194/",description:"MSc Management, BA History and Politics\nStartup coordinator at Web Summit\n                        Marysol has been starting businesses since 2018 when she started GiftIt, a nonprofit to allow people to donate their skills in the aid of charities.\n                        She's passionate about prototyping and customer-focused development."},{imageSrc:"img/shivam1.jpg",name:"Shivam Agarwal",position:"Financial Advisor",linkedInURL:"https://www.linkedin.com/in/shivam-agarwal-8a625a5b/",description:"PhD candidate in Finance and Operational Risk at UCD\n                        Shivam defines our financial models and conducts market research. His advice and hard work as team member contributes to meaningful, finance-oriented conversations with potential investors."},{imageSrc:"img/sophie1.png",name:"Sophie Cassidy",position:"Technical Advisor",linkedInURL:"https://www.linkedin.com/in/scassidy04/",description:"BEngSc, MEng Mechanical\nGraduate software engineer at Vodafone.\n                        Sophie was a fellow participant in the NovaUCD Student Enterprise Competition with FloMo. Sophie bridges the technical and business worlds, and shares her tech expertise to guide the development of eofis."}]})]})})]})},le=function(){return Object(w.jsxs)("div",{className:"colour-tile-list",children:[Object(w.jsx)("h1",{children:"Here's how eofis works..."}),Object(w.jsx)("div",{className:"full-height-screen",children:Object(w.jsxs)("div",{className:"full-width-container w1-2",children:[Object(w.jsxs)("div",{className:"blob-headed-message",children:[Object(w.jsx)("h2",{children:"STEP\xa01:\xa0CHOOSE"}),Object(w.jsx)("h3",{children:"Highlight the text you want to learn"}),Object(w.jsx)("p",{children:"Select your text and send it to the eofis browser extension."}),Object(w.jsx)("p",{children:"Eofis browser extension works on"}),Object(w.jsxs)("ul",{className:"tick-list",children:[Object(w.jsx)("li",{children:"Chrome"}),Object(w.jsx)("li",{children:"Firefox"}),Object(w.jsx)("li",{className:"skip",children:"on"}),Object(w.jsx)("li",{children:"Windows"}),Object(w.jsx)("li",{children:"Mac OS"}),Object(w.jsx)("li",{children:"Linux"})]})]}),Object(w.jsx)("div",{children:Object(w.jsx)("img",{title:"Image showing selected text in an online article",src:F})})]})}),Object(w.jsx)("div",{className:"full-height-screen",children:Object(w.jsxs)("div",{className:"full-width-container w1-2",children:[Object(w.jsxs)("div",{className:"blob-headed-message",children:[Object(w.jsx)("h2",{children:"STEP\xa02:\xa0MAGIC!"}),Object(w.jsx)("h3",{children:"Flashcards, quizzes and notes are automatically generated and organised from the text"}),Object(w.jsx)("p",{children:"Eofis automatically generates flashcards and a personal concept map, complete with reminders to practice your learning."})]}),Object(w.jsx)("div",{children:Object(w.jsx)("img",{title:"Image showing concept map",src:F})})]})}),Object(w.jsx)("div",{className:"full-height-screen",children:Object(w.jsxs)("div",{className:"full-width-container w1-2",children:[Object(w.jsxs)("div",{className:"blob-headed-message",children:[Object(w.jsx)("h2",{children:"STEP\xa03:\xa0PRACTICE"}),Object(w.jsx)("h3",{children:"Practice makes perfect!"}),Object(w.jsx)("p",{children:"Practice your learning using eofis' flashcards and a sophisticated scheduling algorithm to maximise your learning."})]}),Object(w.jsx)("div",{children:Object(w.jsx)("img",{title:"Image showing question being practiced",src:"img/PracticeCard.png",style:{maxWidth:"816px"}})})]})}),Object(w.jsx)("div",{className:"full-height-screen",children:Object(w.jsxs)("div",{className:"full-width-container w1-2",children:[Object(w.jsxs)("div",{children:[Object(w.jsx)("h2",{children:"Still wondering how eofis works?"}),Object(w.jsx)("h4",{children:Object(w.jsx)("strong",{children:"See it in action"})})]}),Object(w.jsx)("div",{children:Object(w.jsxs)("video",{controls:!0,children:[Object(w.jsx)("source",{src:"https://drive.google.com/u/0/uc?id=10xBdQBQJuQiIfMb_KqJgBx9TWdrSUyQJ&export=download",type:"video/mp4"}),"This video could not be loaded"]})})]})})]})},de=n(42),je=n.n(de),he=function(e){var t=e.image;return Object(w.jsxs)("div",{className:je.a.logo,children:[t&&Object(w.jsx)("img",{src:J}),Object(w.jsx)("span",{children:"eofis"})]})},ue=n(68),be=n(43),pe=n.n(be),me=function(e){var t=e.setOpen;return Object(w.jsxs)("div",{onClick:function(){t((function(e){return!e}))},className:pe.a["styled-menu-btn"],children:[Object(w.jsx)("div",{}),Object(w.jsx)("div",{}),Object(w.jsx)("div",{})]})},xe=n(24),Oe=n.n(xe),fe=function(e){var t=e.open,n=e.setOpen;return Object(w.jsxs)("div",{className:t?Oe.a["styled-nav"]:Oe.a["styled-nav-hidden"],children:[Object(w.jsx)("div",{className:Oe.a.cross,onClick:function(){n((function(e){return!e}))},children:Object(w.jsx)("img",{alt:"Exit menu",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAACjklEQVR4nO3bzW7TQBTF8T9QSsICFnTZICF4AHgxEEJUCImuCjwZC1REAamtQETQvgQfahsW7hCw4tjxzNy54POTvCVnTi/jjzggIiIiIiIiIiIiIiL/jUuZ//014AIwy/w5sdapMnrP+ZdrwFPgEPgJnAIfgMfAuGCuujGwBexTZfwBfASeANcL5urkNvCZ+XTUj/fApFi6uQnVH78p5yfgTrF0La4CX2gOH44pcLNQRs4/e7og16Kcnv4H/vaM9vCly+5acji2C2Rs9Y7uC5gBX4FbhvkmLN/WFh17hvk6WaM6oayyCMvJXnWSw3EKXDTIt5LvrL4Qi8nuM8nh+JYxV29v6beYnJPdd5LD8SZDpmgP6L+gHGXHljwD7ifMk8xl4BVxC0u1jcRsF+F4TXXH6NIm8VMUO9kpJnl6vhbXUkxT38ku+dlFlFjw4EoOLBc+2JIDiwIGX3KQswiVXJOjEJXcIGUxKrlFqmvc0tfq/4QU06hJ7qhU2YMqObAue5AlB1ZlD7rkIHfZKvkPucpWyQukLlslL5GqbHclu/uGV/LT1mFAJ0MDurwzoBsWA7oFN6CHSgb0mNSAHvwb0FdZBvTlrAG9bmBAL9AY0CthBvSSowG9tmtAL6IbGAG7+JimFJO9R/VrYHe28FFykKLsRwnzJHNIue2iSew2cpAhU5QrwAk+JrkuZrJPcPbLrDFwhr+Sg75ln1Gde1w5xsd20aTPNnJkmK+zl/ib5LpVJ3unQMZWG3Sb6tLPgrtO9jFwo1DGVvdYXvYuPm4ENql+UL9sy7hbLF1HG8ALqrDhzL0PPMTXiWVEdZ18wPyK6Qh4juNJbjLC2eVRg3V8DYGIiIiIiIiIiIiIiHj2C7JZ0iJqGli7AAAAAElFTkSuQmCC"})}),Object(w.jsx)(d.b,{to:"/about",onClick:function(){n((function(e){return!e}))},children:"More about us."}),Object(w.jsx)(d.b,{to:"/tech",onClick:function(){n((function(e){return!e}))},children:"Techy Stuff."}),Object(w.jsx)(d.b,{to:"/contact",onClick:function(){n((function(e){return!e}))},children:"Contact."}),Object(w.jsx)(d.b,{to:"/blog",onClick:function(){n((function(e){return!e}))},children:"Blog."})]})},ge=function(){var e,t,n=Object(i.useState)(!1),c=Object(a.a)(n,2),s=c[0],r=c[1],o=Object(i.useRef)(null);return e=o,t=function(){return r(!1)},Object(i.useEffect)((function(){var n=function(n){e.current&&!e.current.contains(n.target)&&t(n)};return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),[e,t]),Object(w.jsxs)("div",{className:l.a.App,children:[Object(w.jsx)("header",{className:l.a["App-header"],children:Object(w.jsxs)("nav",{children:[Object(w.jsx)(d.b,{to:"/",className:l.a["pull-left"],children:Object(w.jsx)(he,{image:!0})}),Object(w.jsxs)("div",{ref:o,children:[Object(w.jsx)(me,{open:s,setOpen:r}),Object(w.jsx)(fe,{open:s,setOpen:r})]})]})}),Object(w.jsx)("div",{className:l.a["App-content"],children:Object(w.jsxs)(j.c,{children:[Object(w.jsx)(j.a,{path:"/tech",children:Object(w.jsx)(le,{})}),Object(w.jsx)(j.a,{path:"/about",children:Object(w.jsx)(oe,{})}),Object(w.jsx)(j.a,{path:"/contact",children:Object(w.jsx)(I,{})}),Object(w.jsx)(j.a,{path:"/confirm-subscription",children:Object(w.jsx)(q,{})}),Object(w.jsx)(j.a,{path:"/blog/:id",children:Object(w.jsx)($,{})}),Object(w.jsx)(j.a,{path:"/blog",children:Object(w.jsx)($,{})}),Object(w.jsx)(j.a,{path:"/",children:Object(w.jsx)(D,{})})]})}),Object(w.jsx)("footer",{className:l.a["App-footer"],children:Object(w.jsxs)("div",{children:[Object(w.jsxs)("div",{children:[Object(w.jsx)(he,{image:!0}),Object(w.jsxs)("div",{children:["Made with ",Object(w.jsx)(ue.a,{color:"red"})," in \xc9ire"]}),"\xa9 eofis ltd 2022"]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("h4",{children:"Help & Support"}),Object(w.jsx)(d.b,{to:"/contact",children:"Contact Us"})]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("h4",{children:"Social"}),Object(w.jsx)(ne,{name:"eofis",url:"https://www.linkedin.com/company/eofis-ie/"})]})]})})]})},ve=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,69)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),i(e),c(e),s(e),r(e)}))};r.a.render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(d.a,{children:Object(w.jsx)(ge,{})})}),document.getElementById("root")),ve()}},[[60,1,2]]]);
//# sourceMappingURL=main.ca7d04c2.chunk.js.map