import React from "react";
import Box from "../components/Box";
import Text from "../components/Text/Index";
import styled from "styled-components";
import Linkedin from "../assests/linkedin.svg"
import Mail from '../assests/gmail.svg';
import Git from '../assests/github.svg';

const Icons = styled("img")`
height: 45px;
width: 45px;
font-size: 60px;
margin: 15px;

@media (max-width: 560px){
  font-size: 40px;
  height: 35px;
  width 35px;
 }
`;

// const MyImage = styled(Icons)`
// height: 300px;
// width: 300px;
// `

const List = styled("ol")`
list-style: none;
width: 60%;
text-align: center;
padding: 0px;
`;

const About = styled(Text)`
margin: 16px;
@media(max-width: 1065px){
  font-size: 25px;
  }

@media(max-width: 760px){
    font-size: 18px;
}

@media (max-width: 560px){
  font-size: 14px;
 }
`

const Item = styled("li")`
text-align: center;
`;

const Name = styled("h2")`
font-size: 80px;
color: #e9d35b;
height: 50px;
font-family: Tahoma, Geneva, Verdana, sans-serif;

@media(max-width: 1212px){
font-size: 70px;
}

@media(max-width: 1065px){
font-size: 60px;
}

@media(max-width: 917px){
  font-size: 50px;
  }

@media(max-width: 760px){
    font-size: 35px;
}
`;

const Button = styled("button")`
width: 100px;
height: 40px;
color: #fff;
font-size: 14px;
background: #00008b;
border: none;
border-radius: 10px;
cursor: pointer;
margin: 20px 0px 0px 0px;
padding: 5px 10px;
&:hover {
  background: #e9d35b;
  color: black;
}
`

function Home() {
  return (
    <Box width="100%" color="#3e497a" alignItems="center">
      <Box
        widt="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        background=" #21325e"
        color="#f0f0f0"
        height="calc(100vh - 100px)"
      >

        {/* <MyImage src={Picture} alt="My picture"/> */}
        <Name>Hi, My Name is Aman Chandel</Name>
        <Box width="40%" fontSize="30px">
          <About margin="16px">A software developer with a passion for learning and creating. </About>
          <a target="_blank" href="https://www.linkedin.com/in/amanchandel/"><Icons src={Linkedin}/></a>
          <a target="_blank" href="https://github.com/aman1021"><Icons src={Git}/></a>
          <a target="_blank" href="mailto:amaniiitu32@gmail.com"><Icons src={Mail}/></a>
        </Box>
        <a target="_blank" href="https://drive.google.com/file/d/13EZYmn-QnHeHQ8pZ3V8NN-zRH-g5g2JP/view?usp=drivesdk"><Button> <b> Resume </b> </Button></a>
      </Box>

      <Box fontSize="35px" width="100%" display="flex" justifyContent="center" flexDirection="column" alignItems="center">
        <h1 style={{color:"#3e497a"}}> Skills </h1>
        <List>
          <Item>
            <h2> Front-end </h2>
            <span style={{fontSize: "20px"}}> Reactjs,  HTML,  CSS,  Redux,  StyledComponents. </span>
          </Item>
          <Item>
            <h2> Languages </h2>
            <span style={{fontSize: "20px"}}>Javasript,  C++,  TypeScript. </span>
          </Item>
        </List>
      </Box>
    </Box>
  );
}

export default Home;
