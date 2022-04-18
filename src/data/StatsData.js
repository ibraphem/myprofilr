import React from "react";
import {DiGit} from "react-icons/di";
import {SiTypescript, SiFirebase, SiGatsby, SiDocker, SiPhp, SiLaravel, SiNetlify, SiNextdotjs, SiJavascript, SiRedux, SiMysql, SiMaterialui, SiStyledcomponents} from "react-icons/si";
import {GrGraphQl} from "react-icons/gr";
import {FaReact, FaVuejs} from "react-icons/fa"; 
import {DiJqueryUiLogo} from "react-icons/di";

export const SkillsList = [
    {
        icon: (<SiJavascript/>),
        title: "JavaScript", 
        color: "#f7df1e",

    },
    {
        icon: (<SiTypescript/>),
        title: "TypeScript",
        color: "#3178c6", 

    },
    {
        icon: (<FaReact/>),
        title: "React",
        color: "#61dafb",
        

    },
    {
        icon: (<GrGraphQl/>),
        title: "GraphQl",
        color: "#e535ab", 

    },
    {
        icon: (<SiFirebase/>),
        title: "Firebase",
        color: "#ffca2a"

    },
    {
        icon: (<SiGatsby/>),
        title: "Gatsby",
        color: "#663399"

    },
    {
        icon: (<SiNextdotjs/>),
        title: "Nextjs",
        color: "#000"

    },
    {
        icon: (<DiGit/>),
        title: "Git",
        color: "#f05033"

    },
    {
        icon: (<SiDocker/>),
        title: "Docker",
        color: "#2496ed"

    },
    {
        icon: (<SiPhp/>),
        title: "PHP",
        color: "#777bb3"

    },
    {
        icon: (<SiLaravel/>),
        title: "Laravel",
        color: "#f45343"

    },
    {
        icon: (<SiMysql/>),
        title: "MySQL",
        color: "#006080"

    },

]

export const portfolioData = 


[
    {
        info: "The ABC game is a simple game developed to assist toddlers identify the English alphabets properly with recognition to some words associated with it. Something I did in my spare time with react typescript.",
        title: "ABC Game",
        link: "https://abcgame.netlify.app/",
        tools: [
           { icon: (<FaReact color="#61dafb"/>)},
           {icon: (<SiTypescript color="#3178c6"/>)},
           {icon: (<SiStyledcomponents color="#e79479"/>)},
           {icon: (<SiNetlify color="#3cacb8"/>)},
            
        ]
    },
    {
        info: "Finance One is a core finance software with multiple integration with financiers, telcos, insurance, OEMs and other partners instrumental for the management of a device financing project.",
        title: "Finance One",
        tools: [
            { icon: (<FaReact color="#61dafb"/>)},
            {icon: (<SiJavascript color="#f7df1e"/>)},
            {icon: (<SiRedux color="#663399"/>)},
            {icon: (<SiStyledcomponents color="#e79479"/>)}
        ]
    },
    {
        info: "Smart Quiz is a fun project I developed in my spare time by consuming some questions and answers from Open Trivia API. It allows anyone to quickly test their knowledge of politics, history and geography.",
        title: "Smart Quiz",
        link: "https://quizy3.netlify.app/",
        tools: [
            { icon: (<FaReact color="#61dafb"/>)},
            {icon: (<SiTypescript color="#3178c6"/>)},
            {icon: (<SiStyledcomponents color="#e79479"/>)},
            {icon: (<SiNetlify color="#3cacb8"/>)},
         ]
    },
    {
        info: "I was contracted to build an Inventory system for an appliance store to proffer accounting solutions, keep track of stock level, record sales, monitor supply and more based on FIFO.",
        title: "Store Inventory System",
        link: "https://yareece.com.ng/",
        tools: [
            { icon: (<SiLaravel color="#f45343"/>)},
            {icon: (<FaVuejs color="#3fb984"/>)},
            {icon: (<DiJqueryUiLogo color="#faa525"/>)},
        ]
    
    },
    {
        info: "I built the green shop(web and mobile) as a fun project during my spare time with react/react-native, firebase and paystack integration for E-payment. It's an online shop for flowers, vegetables and fruits.",
        title: "Green SHop",
        link: "https://greenshop-3a01d.web.app/",
        tools: [
            { icon: (<FaReact color="#61dafb"/>)},
            {icon: (<SiFirebase color="#ffca2a"/>)},
            {icon: (<SiMaterialui color="#0081cb"/>)},
            {icon: (<SiJavascript color="#f7df1e"/>)},
            {icon: (<SiNetlify color="#3cacb8"/>)},
         ]
    },
    {
        info: "The legal certificate registry is a certificate chamber for a legal office to manage certificates inventory. It keep tabs on expiration and released date and monitors renewals and retrievals.",
        title: "Legal Certificate Registry",
        tools: [
            { icon: (<FaReact color="#61dafb"/>)},
            { icon: (<SiLaravel color="#f45343"/>)},
            {icon: (<SiMaterialui color="#0081cb"/>)},
            {icon: (<SiJavascript color="#f7df1e"/>)},
        ]
    },
    {
        info: "IProve is a data verification platform which I helped built the frontend with react. IProve helps investors and busineses with identity and property verification to mitigate against fraud.",
        title: "IProve NG",
        link: "https://iprove.ng/",
        tools: [
            { icon: (<FaReact color="#61dafb"/>)},
            {icon: (<SiStyledcomponents color="#e79479"/>)},
            {icon: (<SiJavascript color="#f7df1e"/>)},
        ]
    },
    {
        info: "I was contracted to develop a school result management system for a senior senior secondary to manage and make accessible student continous assesment and examination records. ",
        title: "Result Checker",
        tools: [
            { icon: (<FaReact color="#61dafb"/>)},
            { icon: (<SiLaravel color="#f45343"/>)},
            {icon: (<SiMaterialui color="#0081cb"/>)},
            {icon: (<SiJavascript color="#f7df1e"/>)},
        ]
    },
    {
        info: "Developed a light weighted and optimized developers profile to showcase experience, skills and projects with a contact form using GatsbyJs and MDBoostrap. Also styled with CSS using Styled component.",
        title: "Developer's Profile",
        link: "https://ibrahimolayioye.netlify.app/",
        tools: [
            { icon: (<FaReact color="#61dafb"/>)},
            {icon: (<SiJavascript color="#f7df1e"/>)},
            { icon: (<SiGatsby color="#663399"/>)},
            
        ]
    },
]

export const testimonialData = [
    {
        person: "Yaqub Adesola: Senior Frontend Engineer at Union Bank Nigeria, Co-Founder at Boldlinks Technologies",
        content: "Ibrahim is a top-notch designer and an incredible engineer, I have been working with him for about half a decade and I can attest to his problem solving capabilities."
    },
    {
        person: "Babajide Ajayi: Former Frontend Engineer at Intelligra Solution, Former developer  at Andela",
        content: "Ibrahim was a colleague at Intelligra, he is a dogged problem solver and a creative designer. It was a pleasure working with him."
    },
    {
        person: "Ajibaye Felix: Team lead at Twinelight, Former Software Developer at Overland Airways.",
        content: "Ibrahim is a great team player and a fine engineer who is really easy to work with. He writes clean and richly documented codes that makes collaborative work easier."
    },
]