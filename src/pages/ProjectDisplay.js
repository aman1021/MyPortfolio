import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Box from "../components/Box";
import { ProjectList } from "../Helpers/ProjectList";
import Text from "../components/Text/Index";

const NameH1 = styled("h1")`
  margin: 100px 0px 20px 0px;
  color: #3e497a;
  font-size: 35px;
`;

const StyledImg = styled("img")`
  width: 700px;
  border-radius: 10px;
  margin: 0px 0px 20px 0px;
`;

// const Icon = styled("img")`
//   font-size: 60px;
//   color: #3e497a;
//   height: 50px;
//   width: 50px;
// `;

const Button = styled("button")`
  width: 75px;
  height: 40px;
  color: #fff;
  font-size: 14px;
  background: #00008b;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin: 0px 20px 0px 0px;
  &:hover {
    background: #0036b1;
    color: black;
  }
`;

const LiveButton = styled(Button)`
background: #023020;
&:hover{
background: green;
color: black;
}

`
function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <Box
      width="100%"
      height="calc(100vh-100px)"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <NameH1> {project.name} </NameH1>
      <StyledImg src={project.image} />
      <Text fontSize="40px" color="#3e497a" margin="0px 0px 20px 0px">
        <b>Skills:</b> {project.skills}{" "}
      </Text>
      <Box display="flex">
        <a href="https://github.com/aman1021/Crypto">
          <Button>
            <b>Github</b>
          </Button>
        </a>
        <a href="https://crypto-opal-six.vercel.app/">
          <LiveButton>
            <b>Demo</b>
          </LiveButton>
        </a>
      </Box>
    </Box>
  );
}

export default ProjectDisplay;
