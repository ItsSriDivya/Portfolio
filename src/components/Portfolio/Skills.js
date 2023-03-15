import React from 'react';
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
import { Card } from 'antd';
import './Portfolio.scss'

function Skills() {
    const ProficientSkillSet = [
        {
            key: 'js',
            title: 'Javascript',
            image: JSIcon
        },
        {
            key: 'react',
            title: 'React JS',
            image: ReactIcon
        },
        {
            key: 'redux',
            title: 'Redux',
            image: ReduxIcon
        },
        {
            key: 'html',
            title: 'HTML',
            image: HtmlIcon
        },
        {
            key: 'css',
            title: 'CSS',
            image: CSSIcon
        },
        {
            key: 'sass',
            title: 'Sass',
            image: SassIcon
        },
    ]
    const skillfulSkillSet = [
        {
            key: 'ts',
            title: 'Typescript',
            image: TSIcon
        },
        {
            key: 'bs',
            title: 'Bootstrap',
            image: BootIcon
        },
        {
            key: 'python',
            title: 'Python',
            image: PythonIcon
        },
        {
            key: 'docker',
            title: 'Docker',
            image: DocIcon
        },
    ]
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
                {displaySkillCards(ProficientSkillSet)}
            </div>
            <div className='skillful-row'>
                <h6 className='proficient-title'>Skillful</h6>
                {displaySkillCards(skillfulSkillSet)}
            </div>
        </div>
    )
}

export default Skills