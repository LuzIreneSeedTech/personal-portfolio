import React, { useState } from 'react'
import SectionHeader from '../atoms/SectionHeader'
import Button from '../atoms/Button'
import Project1 from '../assets/project_1.png'
import ProjectCards from '../molecules/ProjectCards'

const Projects = () => {
    const headerData = {
        sectionTextHeader : 'projects.'
    }

    const projectButton = { buttonLabel : 'view more projects' }

    const filterButtonLabel = [
        {
            buttonLabel : 'all projects'
        },
        {
            buttonLabel : 'website design'
        },
        {
            buttonLabel : 'web development'
        },
    ]

    const ProjectCardData = [
      {
        id : 1,
        category : 'design',
        projectCardImg : <img src={Project1} alt="project sample" />,
        projectCardTitle : 'To-do App web Design',
        buttonLabel : {
          buttonLabel : 'view design'
        },
        buttonDestination : 'https://www.figma.com/file/QDeXEAOzcWXQOAnSZyrg1R/To-Do-Web-App?type=design&node-id=0%3A1&mode=design&t=iKQ5fDppJ0UOvMGs-1',
      },
      {
        id : 2,
        category : 'design',
        projectCardImg : <img src={Project1} alt="project sample" />,
        projectCardTitle : 'Appointment Booking App Web Design',
        buttonLabel : {
          buttonLabel : 'view design'
        },
        buttonDestination : 'https://www.figma.com/file/BkjtqCdgMKEYiuNN8ZyJRp/book-me-next?type=design&mode=design&t=Vx8nwaiHiOkYMppt-1',
      },
      {
        id : 3,
        category : 'design',
        projectCardImg : <img src={Project1} alt="project sample" />,
        projectCardTitle : 'web portfolio web design',
        buttonLabel : {
          buttonLabel : 'view design'
        },
        buttonDestination : 'https://www.figma.com/file/zY98x5gcJTxt0QHwO5VVKe/my-web-portfolio?type=design&node-id=0%3A1&mode=design&t=JT9qkaw6MK1vFyPx-1',
      },
      {
        id : 4,
        category : 'app',
        projectCardImg : <img src={Project1} alt="project sample" />,
        projectCardTitle : 'To-do web application',
        buttonLabel : {
          buttonLabel : 'view app'
        },
        buttonDestination : 'https://zuitt-to-do-app.netlify.app/',
      },
      {
        id : 5,
        category : 'app',
        projectCardImg : <img src={Project1} alt="project sample" />,
        projectCardTitle : 'appointment booking web app',
        buttonLabel : {
          buttonLabel : 'view app'
        },
        buttonDestination : 'http://google.com',
      },
      {
        id : 6,
        category : 'app',
        projectCardImg : <img src={Project1} alt="project sample" />,
        projectCardTitle : 'web portfolio',
        buttonLabel : {
          buttonLabel : 'view portfolio'
        },
        buttonDestination : 'http://google.com',
      },
    ]

    const [cards, setCards] = useState(ProjectCardData);

    const handleBtns = (word) => {
      switch(word) {

      case "website design":
        let newCards1 = []
        ProjectCardData.map((projectCard) => {
          if(projectCard.category == "design") {
            newCards1.push(projectCard)
          }
        })
        setCards(newCards1)
        break;

      case "web development":
        let newCards2 = []
        ProjectCardData.map((projectCard) => {
          if(projectCard.category == "app") {
            newCards2.push(projectCard)
          }
        })
        setCards(newCards2)
        break;

      default:
        setCards(ProjectCardData)
    }
  };

  return (
    <div className='project-container'>
      <div className='project-header'>
        <SectionHeader props={headerData}/>
      </div>

      <div className='project-content'>
        <div className='filter-button-container'>
          {
            (filterButtonLabel.map((data, index) => {
              return (
                <Button props={data} key={index} onClick={handleBtns} />
              )
            }))
          }
        </div>

        <div className='project-card-container'>
          {
            (cards.map((data, index) => {
              return (
                <ProjectCards props={data} key={index} />
              )
            }))
          }
        </div>

        <div className='project-btn-container'>
          <Button props={projectButton} />
        </div>
      </div>
    </div>
  )
}

export default Projects
