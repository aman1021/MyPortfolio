import React from 'react'
import styled from 'styled-components'
import Box from '../components/Box'
import ProjectItem from '../components/projectList/ProjectItem'
import { ProjectList } from '../Helpers/ProjectList'

const Container = styled(Box)`
width: 70vw;
height: auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
place-items: center;

@media(max-width: 1300px){
  grid-template-columns: 1fr 1fr;
}

@media(max-width: 800px){
  grid-template-columns: 1fr;
  width: 100%
}

`

function Projects() {


  return (
    <Box width="100%" height="auto" display="flex" alignItems="center" justifyContent="center" flexDirection="column">
      <h1>My personal Projects</h1>
      <Container>
        {ProjectList.map((project, idx)=> {
          return <ProjectItem id={idx} name={project.name} image={project.image} />
        })}
      </Container >
    </Box>
  )
}

export default Projects