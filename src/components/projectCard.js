import React from 'react'

const ProjectCard = ({ project }) => {
  return (
      <div className="col s12 m6 l6 xl4">
        <div className="card large">
          <div className="card-image">
            <img src={project.imageURL} alt={project.title} />
            {/* <span className="card-title">{project.title}</span> */}
          </div>
        </div>
      </div>
  )
}

export default ProjectCard