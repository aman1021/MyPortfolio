import React from "react";
import Box from "../Box/index";
import { Link } from "react-router-dom";
import styled from "styled-components";
function Navbar() {


 const Path = styled(Link)`
 color: #FFFFFF;
 text-decoration: none;
 margin: 20px;
 font-size: 25px;

 @media (max-width: 560px){
  font-size: 20px;
 }
 `;


  return (
    <Box width="100%" height="100px" background="#21325e">
      <Box
        color="#FFFFFF"
        height="100%"
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Path to={"/"}> Home </Path>
        <Path to={"/projects"}> Projects </Path>
        <Path to={"/experience"}> Experience </Path>
      </Box>
    </Box>
  );
}

export default Navbar;
