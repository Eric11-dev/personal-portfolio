import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

const Experience = () => {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement 
        className='vertical-timeline-component--education'
        date="2016-2021"
        iconStyle={{background: '#3e497a', color: '#fff'}}
        icon={<SchoolIcon />}
      >
        <h3 className='vertical-timeline-element-title'>
          Simon Fraser University, BUrnaby, BC, Canada
        </h3>
        <p>Concentrate: Computer Engineering</p>
        <p>Bacholer Degress</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer - Gokabu Technologies
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Richmond, BC
          </h4>
          <p>
          Designing, developing, and maintaining complex back-end and front-end for a rideshare platform.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience