import React from 'react'
import Button from '../atoms/Button';
import { Link } from 'react-router-dom';

const ProjectCards = ({props}) => {
    const { projectCardImg, projectCardTitle, buttonLabel, buttonDestination } = props;

    console.log(props.buttonDestination)

  return (
    <div className='project-card'>
      {projectCardImg}

      <div className='overlay'>
        <h4>{projectCardTitle}</h4>
        <a href={buttonDestination} target='_blank'>
          <Button props={buttonLabel} />
        </a>
      </div>
    </div>
  )
}

export default ProjectCards
