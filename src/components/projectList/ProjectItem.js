import React from 'react'
import styled from 'styled-components'
import Box from '../Box'
import { useNavigate } from 'react-router-dom';
import Text from '../Text/Index';

const Projects = styled(Box)`
border-radius: 15px;
width: 300px;
height: 300px;
margin: 40px;
box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
text-align: center;
&:hover{
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.5);
    transition: 0.3s ease-in;
    cursor: pointer;
}

@media (max-width: 560px){
  width: 275px;
  height: 275px;
  margin 20px;
 }
`;

const ProjectName = styled(Text)`
font-size: 24px;
font-weight: 800;
margin: 10px;

@media (max-width: 560px){
  font-size: 20px;
  font-weight: 750;
 }

`



const BgImage = styled(Box)`
border-top-left-radius: 15px;
border-top-right-radius: 15px;
width: 100%;
height: 200px;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`;

function ProjectItem({ image, name, id }) {

  const navigate = useNavigate()

  return (
    <Projects onClick={()=> navigate("/project/" + id)}>
        <BgImage style={{backgroundImage: `url(${image})`}}/>
        <ProjectName> {name} </ProjectName>
    </Projects>
  )
}

export default ProjectItem