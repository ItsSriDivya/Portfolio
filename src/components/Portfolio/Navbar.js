import React from "react";
import './Portfolio.scss';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-scroll";
import ProfilePic from '../../assets/images/profilepic.jpg'

function Navbar() {
    const navigate = useNavigate();
    return (
        <div className="navbar-div">
        <header>
            <nav>
            <div class="profile-pic" onClick={() => navigate("/")}>
                <img class="fitting-image" style={{ width: '30px', height: '30px' }} src={ProfilePic} alt='profile-pic' />
                <div style={{ fontFamily: 'Comic Sans MS', marginTop: '5px'}}>SriDivya Pulapa</div>
            </div>
                <ul className="navbar-header">
                    <li>
                        <Link activeClass="active" smooth spy to="about">
                            ABOUT
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" smooth spy to="skills">
                            SKILLS
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" smooth spy to="projects">
                            EXPERIENCE
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" smooth spy to="contact">
                            CONTACT ME
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
        </div>
    )
}

export default Navbar