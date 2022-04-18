import React from "react"
import {HiExternalLink} from "react-icons/hi"
import { Heading } from "./styles/GlobalStyles"


const Portfolio = ({data}) => {

  
  return (
<div className="container py-5">
<Heading>SOME OF THE THINGS I'VE DONE</Heading>
  <div className="row no-gutters">
    {data.map((project,key) => (
       <div className="col-md-4 ">

     
         <section className="mx-1 my-1" key={key} >
           <div className="card">
             <div className="card-body d-flex flex-row">
             
               <div>
                 <h5 className="card-title font-weight-bold mb-2" style={{color: "#f26a2e"}}>
                   {project.title}
                   {project.link && <span className="float-end mx-3 text-primary"><a href={project.link} target="_blank" rel="noreferrer"><HiExternalLink/></a></span>}
                   
                 </h5>
               </div>
             </div>
             <div
               className=" px-3 hover-overlay ripple rounded-0"
             >
               {project?.info}
               <a href="#!">
                 <div
                   className="mask"
                   style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                 />
               </a>
             </div>
             <div className="card-body">
               <div className="d-flex justify-content-between">
                
                 <div>
                   {project.tools.map((tool, key) => (
                      <i
                      className="text-muted p-md-1 my-1 mx-3 me-2"
                      data-mdb-toggle="tooltip"
                      data-mdb-placement="top"
                      title="Share this post"
                      key={key}
                      style={{fontSize:"20px"}}
                    >{tool.icon}</i>
                   ))}
                  
                   
                 </div>
               </div>
             </div>
           </div>
         </section>

   
       </div>
    ))}
   

  </div>
</div>

  )
}

export default Portfolio
