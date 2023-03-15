import React from 'react';
import './Portfolio.scss';
import ProfilePic from '../../assets/images/profilepic.jpg'
import { MailOutlined, EnvironmentOutlined, LinkedinOutlined } from "@ant-design/icons";

function ContactMe() {
    return (
        <div className='footer-contact-div'>
            <div className='contact-div'>
                <div className='profile-details'>
                    <div className='name-details'>
                        <div class="profile-pic">
                            <img class="fitting-image" style={{ width: '50px', height: '50px' }} src={ProfilePic} alt='profile-pic' />
                        </div>
                        <div>
                            <h4 style={{ margin: '15px'}}>SriDivya Pulapa</h4>
                        </div>
                    </div>
                    <div className='name-details'>
                        <MailOutlined />
                        <div>
                            <h6 style={{ margin: '8px'}}>sridivya.pulapa35@gmail.com</h6>
                        </div>
                    </div>
                    <div className='name-details'>
                        <EnvironmentOutlined />
                        <div>
                            <h6 style={{ margin: '8px'}}>Hyderabad, India</h6>
                        </div>
                    </div>
                </div>
                <div className='contact-details'>
                    <h3 style={{ fontFamily: 'system-ui'}}>Let's Connect!</h3>
                    <a href='https://www.linkedin.com/in/pulapa-sridivya-928a321a6/' target='_blank' rel="noreferrer"><LinkedinOutlined className='linkedin-icon' /></a>
                </div>
            </div>
        </div>
    )
}

export default ContactMe