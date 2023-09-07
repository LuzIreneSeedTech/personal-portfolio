import React from 'react'
import Button from '../atoms/Button';

const ProjectCards = ({props}) => {
    const { projectCardImg, projectCardTitle, buttonLabel } = props;

  return (
    <div className='project-card'>
      {projectCardImg}

      <div className='overlay'>
        <h4>{projectCardTitle}</h4>
        <Button props={buttonLabel} />
      </div>
    </div>
  )
}

export default ProjectCards
