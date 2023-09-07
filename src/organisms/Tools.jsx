import React from 'react'
import SectionHeader from '../atoms/SectionHeader'
import ToolsCard from '../molecules/ToolsCard'
import FigmaIcon from '../assets/figma.png'
import HTMLIcon from '../assets/html.png'
import CSSIcon from '../assets/css.png'
import JSIcon from '../assets/js.png'
import ReactIcon from '../assets/react.png'
import BootstrapIcon from '../assets/bs.png'
import SASSIcon from '../assets/sass.png'
import GitIcon from '../assets/git.png'
import GitHubIcon from '../assets/gh.png'

const Tools = () => {
    const headerData = {
        sectionTextHeader : 'tools.'
    }

    const toolsData = [
        {
            iconImage : <img src={FigmaIcon} alt="this is an icon" />,
            toolCardTitle : 'figma'
        },
        {
            iconImage : <img src={HTMLIcon} alt="this is an icon" />,
            toolCardTitle : 'HTML'
        },
        {
            iconImage : <img src={CSSIcon} alt="this is an icon" />,
            toolCardTitle : 'CSS'
        },
        {
            iconImage : <img src={JSIcon} alt="this is an icon" />,
            toolCardTitle : 'javascript'
        },
        {
            iconImage : <img src={ReactIcon} alt="this is an icon" />,
            toolCardTitle : 'react'
        },
        {
            iconImage : <img src={BootstrapIcon} alt="this is an icon" />,
            toolCardTitle : 'bootstrap'
        },
        {
            iconImage : <img src={SASSIcon} alt="this is an icon" />,
            toolCardTitle : 'SASS'
        },
        {
            iconImage : <img src={GitIcon} alt="this is an icon" />,
            toolCardTitle : 'git'
        },
        {
            iconImage : <img src={GitHubIcon} alt="this is an icon" />,
            toolCardTitle : 'github'
        },
    ]

  return (
    <div className='tools-container'>
        <div className='tools-header'>
            <SectionHeader props={headerData} />
        </div>

        <div className='tools-card-container'>
            {
                (toolsData.map((data, index) => {
                    return (
                        <ToolsCard props={data} key={index} />
                    )
                }))
            }
        </div>
    </div>
  )
}

export default Tools
