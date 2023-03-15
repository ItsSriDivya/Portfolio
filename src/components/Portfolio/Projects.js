import React from "react";
import { Carousel } from 'antd';
import './Portfolio.scss'

function Projects() {
    return (
        <div className="projects-div">
            <h3 style={{ fontFamily: 'Candara', paddingTop: '50px', marginBottom: '30px' }}>Experience</h3>
            <Carousel autoplay>
                <div className="content-style">
                    <h3 className="company-header">
                        KROLL
                    </h3>
                    <div style={{ textAlign: 'initial', margin: '20px'}}>
                    <h5 className="designation-class">Software Engineer II (Dec 2020 – Till Date)</h5>
                    <ul className="list-styles">
                        <li>
                            <h6 className="project-headers">Audited Financial Statements Extraction/ General Table Extraction Project</h6>
                            <p>An application which helps to review PDF files & extracting the finance details to excel files. We generate the Output sheet by identifying the fund type and filling the sheet based on appropriate fields. Sheets that need to be filled are tables extracted from the pdf and their corresponding fund types.</p>
                        </li>
                        <li>
                            <h6 className="project-headers">RegAxis</h6>
                            <p>RegAxis Application provides service for its clients who are utilizing the services for Compliance Consulting. The project provides the Compliance Consultants and Compliance Managers to assist their clients to avail different features like Onboarding, Compliance Calender, Event Driven Checklists, Compliance Training etc.</p>
                        </li>
                        <li>
                            <h6 className="project-headers">Auth0</h6>
                            <p>Auth0 is a flexible solution to add authentication and authorization services to other applications. Cost, time, and risk that come with building own solution to authenticate and authorize users can be avoided.</p>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="content-style">
                    <h3 className="company-header">
                        Virtusa
                    </h3>
                    <div style={{ textAlign: 'initial', margin: '20px'}}>
                    <h5 className="designation-class">Engineer (May 2018 – Dec 2020)</h5>
                    <ul className="list-styles">
                        <li>
                            <h6 className="project-headers">MetLife – Servicing Patterns</h6>
                            <p>A composer and a customer application has been built wherein customer application displays fields based on composer configurations. The main application is where the user can see and perform some changes on his insured products, claims and all the documents and forms related to his products. This UI can be configured through composer.</p>
                        </li>
                        <li>
                            <h6 className="project-headers">MetLife – Gulf & DTC Mobile App</h6>
                            <p>An application where we need to on board user details and the type of insurance details in GSSP platform from MET online. It is Dubai based project done using media queries as it includes mobile Application also. </p>
                        </li>
                        <li>
                            <h6 className="project-headers">MetLife - R8 Provider Portal</h6>
                            <p>Single page application on top of Micro services connected to Mongo DB. We need to on board Voluntary benefits products in Global Sales and Service platform from MET online.</p>
                        </li>
                    </ul>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default Projects