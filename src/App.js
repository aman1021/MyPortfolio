import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Projects from "../src/pages/Projects";
import Experience from "../src/pages/Experience";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import styled from "styled-components";
import Box from "./components/Box";
import ProjectDisplay from "./pages/ProjectDisplay";

const AppBody = styled(Box)`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #f0f0f0;
  alignItems: flex-end;
`;

function App() {
  return (
    <AppBody>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay/>}/>
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Footer/>
      </Router>
    </AppBody>
  );
}

export default App;
