import React from 'react'
import Staff from "../../componets/models/staff"
import bg from "../../assets/background/projects-background.png"
import RenderModel from '../../componets/randerModel'
import ProjectList from "./project"
import { projectsData } from '../../data'

const Projects = () => {
  return (<>
        <img 
            src={bg} alt="project-background-image"  fill
            className="w-screen -z-50 h-screen fixed object-cover scale-125 object-center  "/>
        <ProjectList projects={projectsData} />
        <div className=" flex items-center justify-center top-0 -translate-x-2.5 -z-10 left-0 lg:left-24 h-screen">
            <RenderModel>
                <Staff />
            </RenderModel>
     
        </div>

    </>)
}

export default Projects