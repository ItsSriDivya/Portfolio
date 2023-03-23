import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import JSIcon from '../../assets/images/js.png';
import ReactIcon from '../../assets/images/react.png';
import HtmlIcon from '../../assets/images/html.jpg';
import CSSIcon from '../../assets/images/css.png';
import SassIcon from '../../assets/images/sass.png';
import ReduxIcon from '../../assets/images/redux.png';
import PythonIcon from '../../assets/images/python.png';
import BootIcon from '../../assets/images/bootstrap.png';
import TSIcon from '../../assets/images/typescript.png';
import DocIcon from '../../assets/images/docker.png';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { getSkillSetData } from '../../redux/Actions'
import { Card } from 'antd';
import './Portfolio.scss'

function Skills() {
    const dispatch = useDispatch();
    const skillSetData = useSelector(state => state.skillSetData);
    const [proficientSkills, setProficientSkills] = useState([]);
    const [skillfulSkills, setSkillfulSkills] = useState([]);
    const skillsIcons = [
        {
            key: 'js',
            image: JSIcon
        },
        {
            key: 'react',
            image: ReactIcon
        },
        {
            key: 'redux',
            image: ReduxIcon
        },
        {
            key: 'html',
            image: HtmlIcon
        },
        {
            key: 'css',
            image: CSSIcon
        },
        {
            key: 'sass',
            image: SassIcon
        },
        {
            key: 'ts',
            image: TSIcon
        },
        {
            key: 'bs',
            image: BootIcon
        },
        {
            key: 'python',
            image: PythonIcon
        },
        {
            key: 'docker',
            image: DocIcon
        },
    ]
    useEffect(() => {
        dispatch(getSkillSetData())
    }, [dispatch])
    
    useEffect(() => {
        if (!skillSetData.loading && Object.keys(skillSetData.skillsData).length > 0) {
            const proficient = [...skillSetData.skillsData.ProficientSkillSet];
            const skillful = [...skillSetData.skillsData.skillfulSkillSet];
            const proficientSkillsWithIcons = proficient.length > 0 && proficient.map(item => {
                const iconMapWithTitle = skillsIcons.filter(i => i.key === item.key);
                item.image = iconMapWithTitle[0].image
                return item;
            });
            const skillfulSkillsWithIcons = skillful.length > 0 && skillful.map(item => {
                const iconMapWithTitle = skillsIcons.filter(i => i.key === item.key);
                item.image = iconMapWithTitle[0].image
                return item;
            })
            setProficientSkills(proficientSkillsWithIcons);
            setSkillfulSkills(skillfulSkillsWithIcons);
        }
    }, [skillSetData])
    const displaySkillCards = (skillSet) => {
        const result = skillSet.map(item => {
            return (
                <div>
                    <AnimationOnScroll animateIn="animate__rubberBand">
                        <Card
                            key={item.key}
                            bordered={false}
                            hoverable
                            className='skills-cards'
                        >
                            <img style={{ width: '80px', height: '80px' }} alt={item.key} src={item.image} />
                        </Card>
                    </AnimationOnScroll>
                </div>
            )
        })
        return result
    }
    return (
        <div className='skills-div'>
            <h3 style={{ fontFamily: 'Candara' }}>Technologies</h3>
            <div className='proficient-row'>
                <h6 className='proficient-title'>Proficient</h6>
                {proficientSkills.length > 0 && displaySkillCards(proficientSkills)}
            </div>
            <div className='skillful-row'>
                <h6 className='proficient-title'>Skillful</h6>
                {skillfulSkills.length > 0 && displaySkillCards(skillfulSkills)}
            </div>
        </div>
    )
}

export default Skills