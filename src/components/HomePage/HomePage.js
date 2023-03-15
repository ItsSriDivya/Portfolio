import React from "react";
import { useNavigate } from 'react-router-dom';
import './HomePage.scss';
import { Tooltip, Button } from "antd";
import { Random } from "react-animated-text";
import { RightOutlined } from "@ant-design/icons";
import FrontEndIcon from '../../assets/images/frontend-icon.jpg'

function HomePage() {
    const navigate = useNavigate();
    const getListContent = () => {
        const list = []
        for (var i = 0; i < 10; i++) {
            list.push(<li></li>);
        }
        return list
    }

    const navigateToPortfolio = () => {
        navigate("/portfolio");
    }
    return (
        <>
            <div className="content-container">
                <div className="content-sub">
                <div className="image-div">
                        <img class="fitting-image" style={{ width: '250px', height: '250px' }} src={FrontEndIcon} alt='front-end' />
                    </div>
                    <div className="introduction">
                        <div className="title">
                            <Random
                                text='Front End Developer'
                                iterations={2}
                                effect="verticalFadeIn"
                                effectChange={3}
                                effectDirection="up"
                            />
                        </div>
                        <h2>SriDivya Pulapa</h2>
                        <p className="extra-desc">I love to create beautiful and performant products with delightful user experiences.
                        </p>
                        <Tooltip className="portfolio-tooltip-class" title='Portfolio'><Button onClick={() => navigateToPortfolio()} className="forward-icon-btn" ><RightOutlined className="forward-icon" /></Button></Tooltip>
                    </div>
                </div>
            </div>
            <div class="area" >
                <ul class="circles">{getListContent()}</ul>
            </div >
        </>
    )
}

export default HomePage