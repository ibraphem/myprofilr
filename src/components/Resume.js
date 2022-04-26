import React from "react"
import styled from "styled-components"
import "../assets/css/resume.css"
import { Button } from "./styles/Button"


const Resume = () => {


  const resumeData = [
    {
        title: "Frontend Engineer at Intelligra Solution Limited", 
        duration: "November, 2021 - Present",
        desc: "Intelligra Solution is a Fintech specialized in device financing. As a frontend engineer, I:",
        duties: [
          
          {experience: "Participated in a product re-engineering process on the core finance application that integrates Intelligra with her most important partners (telcos and financiers)."},
          {experience: "Handled the frontend development for the migration of legacy sytems built on MVC into microservices."},
          {experience: "Collaborated with the backend engineers to deliver a self onboarding system for customers."},
          {experience: "Developed a checkin system to ensure sales representative attendance at the store of assignment."},
          
        ]

    },
    {
      title: "Software Developer at Overland Airways Limited", 
      duration: "August, 2019 - November 2021",
      desc: "Overland Airways is an Aviation company majored in commercial, chartered and special flights. As a software developer, I:",
      duties: [
        
          {experience: "Worked with the team that helped build the operational fleet management system"},
          {experience: "Carried out persistent review and improvement of the flight booking engine frontend"},
         { experience: "Collaborated with cross functional units including the legal, store and engineering departments to deliver ERP to manage internal operations ."},
          {experience: "Championed technical documentation of builds"},
        
      ]

  },
]

  return (
    <div class="page-content">
      <div class="container">
        <div className="shadow-1-strong bg-white my-5 p-5 card" id="experience">
          <div className="work-experience-section">
            <h2 className="h2 fw-light mb-4">WHERE I HAVE WORKED</h2>
            <div className="timeline">
              {resumeData.map((resume, key) => {
                return (
                  <div
                key={key}
                className="timeline-card timeline-card-info"
                style={{color: "#f26a2e"}}
              >
                <div className="timeline-head px-4 pt-3">
                  <div className="h6">
                    {resume.title}
                  </div>
                </div>
                <div className="timeline-body px-4 pb-4">
                  <div className="text-muted text-small mb-3">
                    {resume.duration}
                  </div>
                  <div style={{color: "#000"}}><b>{resume.desc}</b></div>
                  <div style={{color: "#000"}} >
                    <ul>
                      {resume.duties.map((duty, key) => {
                      return ( <ExperienceList key={key}>{duty.experience}</ExperienceList>)
              })}
                      

                    </ul>

                  </div>
                </div>
              </div>
                )
              })}
              
              
            </div>
            
          </div>
          <Button primary="true" round="true" onClick={() => window.open('https://docs.google.com/document/d/1dn8n6Rq0zBwRwsRly8S36JXKuk8DvIL4SFRYUdNdSAk/edit?usp=sharing', '_blank')} style={{color:"#fff", zIndex:100, width:"200px"}}>Complete Resume</Button>
        </div>
        
      </div>
      
    </div>
  )
}

export default Resume

const ExperienceList = styled.li`
    margin-top: 1.5rem;
`
