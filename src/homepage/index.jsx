import React from "react";
import HomeNavbar from "./navbar";
import Herosection from "./herosection";
import { Container } from "reactstrap";
import About from "./about";
const Home = () => {
    return(
        <>
        <HomeNavbar/>
        <Herosection/>
        <About/>
        </>
        
    );
}
export default Home ;