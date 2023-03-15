import React from "react";
import { Button } from "antd";
import AboutMeIcon from '../../assets/images/about-me-pic.jpg';
import Resume from '../../assets/files/Resume.pdf'
import { DownloadOutlined } from "@ant-design/icons"; 

function AboutMe() {
    return (
        <div class="aboutme-container">
            <div className="about-div">
                <div class="aboutme-img">
                    <img class='fitting-image' style={{ width: '300px', height: '300px' }} src={AboutMeIcon} alt='about-me' />
                </div>
                <div class="aboutme-para">
                    <h4 className="about-me-title">Hello There!</h4>
                    <h6 className="about-me-title">Welcome to my Portfolio :) </h6>
                    <p className="about-para-1">
                        4+ years of experience in Front End Development with hands-on in identifying web-based user interactions along with designing & implementing highly-responsive user interface components by deploying React concepts.
                        Proficient in translating designs & wireframes into high-quality code, and writing application interface code via Javascript and ReactJS workflows.
                        I like to craft solid and scalable frontend products with great user experience.
                        Interested in the entire frontend spectrum along with constantly updating myself with latest technologies.
                        I am also keenly looking forward to explore backend technologies and deployment process.
                    </p>
                    <p className="about-para-2">You are welcome to get in touch for any suggestions or collaborations.</p>
                    <Button type='default'>
                        <a className='hire-me-btn' href={Resume} download='Resume-SriDivya' target='_blank' rel="noreferrer"> <DownloadOutlined style={{position: 'relative', bottom: '2px'}}/> Resume</a>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default AboutMe