import React from 'react'
import ProjectLayout from './ProjectLayout'

const projectList = ({projects}) => {
  return (<>
    <div
      className='w-full max-w-auto max-w-4xl px-4 mx-auto px-16 space-y-6 space-y-8  my-10 flex flex-col items-center'
    >
    {projects.map((project, idx)=>{
        return <ProjectLayout key={idx} {...project} />
    })}
    </div>
    
  </>)
}

export default projectList