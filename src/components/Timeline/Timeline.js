
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import 'materialize-css/dist/css/materialize.min.css';
import axios from 'axios';
import Loader from '../PreLoader/Preloader';
    

const Timeline = () => {
  const [timeline, setTimeline] = React.useState(null)
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    axios.get('/timeline').then((data) => {
      setTimeline(data.data)
    }).catch((err) => {
      setError(err)
    })
  }, [])
  if(error || !timeline){
    console.log(error);
    return (<Loader />)
  }
  return(
<div style={{background: "url('https://api.ieeemec.org/images/hero/mec.jpeg')", backgroundPosition: "center", backgroundAttachment: "fixed"}}>
  <div style={{height: "20em", marginTop: "9em", width: "100%", background: "transparent"}}>
    <h1 className="light-blue-text text-darken-4" style={{textAlign: "center", paddingTop: "40px", fontWeight: "bolder",  }} >Timeline</h1>
  </div>
  <VerticalTimeline>
    {
      timeline.map((item, i) => 
      <VerticalTimelineElement  className="vertical-timeline-element--work" date={item.date} iconStyle={{ background: '#01579b', color: '#fff' }}>
      {
        <>
       <h3 className="vertical-timeline-element-title">{item.title}</h3>
       {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
       <p>{item.description}</p>
       </> 
      }
      </VerticalTimelineElement> 
      )
    }
  {/* <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2011 - present"
    iconStyle={{ background: '#01579b', color: '#fff' }}
    >
    <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2010 - 2011"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

  >
    <h3 className="vertical-timeline-element-title">Art Director</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2008 - 2010"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2006 - 2008"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="April 2013"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

  >
    <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
    <p>
      Strategy, Social Media
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="November 2012"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

  >
    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
    <p>
      Creative Direction, User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2002 - 2006"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

  >
    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
    <p>
      Creative Direction, Visual Design
    </p>
  </VerticalTimelineElement> */}
</VerticalTimeline>
</div>
  )
}

export default Timeline
