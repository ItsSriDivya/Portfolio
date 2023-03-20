import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import './HomePage.scss';
import { Tooltip, Button } from "antd";
import { Random } from "react-animated-text";
import { RightOutlined } from "@ant-design/icons";
import { getHomePageData } from '../../redux/Actions'
import FrontEndIcon from '../../assets/images/frontend-icon.jpg'

function HomePage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [homepageData, setHomePageData] = useState({})
    const data = useSelector(state => state.infoData);
    useEffect(() => {
        dispatch(getHomePageData())
    }, [dispatch])
    useEffect(() => {
        if (!data.loading && Object.keys(data).length > 0) {
            setHomePageData(data.introData)
        }
    }, [data])
    const getListContent = () => {
        const list = []
        for (var i = 0; i < 10; i++) {
            list.push(<li></li>);
        }
        return list
    }

    const navigateToPortfolio = () => {
        navigate("/portfolio-page");
    }
    return (
        <>
            <div className="content-container">
                <div className="content-sub">
                    <div className="image-div">
                        <img class="fitting-image" style={{ width: '250px', height: '250px' }} src={FrontEndIcon} alt='front-end' />
                    </div>
                    {Object.keys(homepageData).length > 0 &&
                        <div className="introduction">
                            <div className="title">
                                <Random
                                    text={homepageData.designation}
                                    iterations={2}
                                    effect="verticalFadeIn"
                                    effectChange={3}
                                    effectDirection="up"
                                />
                            </div>
                            <h2>{homepageData.name}</h2>
                            <p className="extra-desc">{homepageData.description}
                            </p>
                            <Tooltip className="portfolio-tooltip-class" title='Portfolio'><Button onClick={() => navigateToPortfolio()} className="forward-icon-btn" ><RightOutlined className="forward-icon" /></Button></Tooltip>
                        </div>}
                </div>
            </div>
            <div class="area" >
                <ul class="circles">{getListContent()}</ul>
            </div >
        </>
    )
}

export default HomePage