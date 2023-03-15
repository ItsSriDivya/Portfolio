import React from "react";
import Navbar from "./Navbar";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import "animate.css/animate.min.css";
import './Portfolio.scss';

function Portfolio() {
    return (
        <div className="portfolio-div">
            <Navbar />
            <section id="about"><AboutMe /></section>
            <section id="skills"><Skills /></section>
            <section id="projects"><Projects /></section>
            <section id="contact"><ContactMe /></section>
        </div>
    )
}

export default Portfolio