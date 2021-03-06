import React from 'react'
import ProjectCard from './projectCard'
import { Link } from 'react-router-dom'

const ProjectList = ({ projects }) => {
    return (
        <div>
            {projects && projects.map(project => {
                return (
                    <Link to={'/project/' + project.id} key={project.id}>
                        <ProjectCard project={project} />
                    </Link>  
                )
            })}
        </div>
    )
}

export default ProjectList