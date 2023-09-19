import React from 'react'
import ProjectItems from '../components/ProjectItems'
import "../styles/Projects.css"
import { ProjectList } from '../helpers/ProjectList'

const Projects = () => {
  return (
    <div className='projects'>
      <h1>Projects</h1>
      <div className='projectList'>
        {ProjectList.map((project, idx) => {
          return <ProjectItems id={idx} name={project.name} image={project.image}/>
        })}
      </div>
    </div>
  )
}

export default Projects