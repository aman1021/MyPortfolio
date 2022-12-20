import React from "react";
import Box from "../Box/index";
import Text from "../Text/Index";
import styled from "styled-components";
import Git from "../../assests/github.svg";
import Linkedin from "../../assests/linkedin.svg";
import Mail from '../../assests/gmail.svg';

const Icons = styled("img")`
  height: 45px;
  width: 45px;
  margin: 20px;
`;

function Footer() {
  return (
    <Box
      width="100%"
      height="200px"
      background="#21325e"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      margin="175px 0px 0px 0px"
    >
      <Box color="white">
        <a href="https://github.com/aman1021"><Icons src={Git} /></a> 
        <a href="https://www.linkedin.com/in/amanchandel/"><Icons src={Linkedin} /></a>
        <a href="mailto:amaniiitu32@gmail.com"><Icons src={Mail}/></a>
      </Box>
      <Text color="white" textAlign="center"> &copy; 2022</Text>
    </Box>
  );
}

export default Footer;
