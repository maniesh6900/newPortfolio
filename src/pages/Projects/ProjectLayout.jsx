import React from 'react'
import { Link } from 'react-router-dom'

const ProjectLayout = ({name , description, demoLink, date}) => {
    return (
        <>  
        <Link
            target={'_blank'}
            className='text-sm md:text-base flex items-center justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg'
            to={demoLink}
        >
            <div className='flex items-center justify-center'>
                <h2 className='text-foreground mx-2 '>{name}</h2>
                <p className='text-muted hidden sm:inline-block mx-2'>{description}</p>
            </div>
            <div className='self-end flex-1 mx-2 mb-1 bg-transparent border-muted border-b border-dashed border-muted mx-2 ' />
            <p className='text-muted sm:text-foreground mx-2'>
            {new Date(date).toDateString()}</p>
        </Link>
            
        </>
  )
}

export default ProjectLayout