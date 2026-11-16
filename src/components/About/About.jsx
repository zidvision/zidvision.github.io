import React from 'react'
import "./About.css"
import Card from '../Card/Card'
import webImg from "./../../assets/web_dev.png"
import aiImg from "./../../assets/ai.png"
import dataImg from "./../../assets/data_analytics.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)
const About = () => {
useGSAP(()=>{
  const tl = gsap.timeline()
  tl.from(".leftabout .circle-line .circle", {
    y: 100,
    duration: 1,
    opacity: 0,
    stagger: 1,
    scrollTrigger:{
      trigger: ".circle",
      scroll: "body",
      scrub: 1,
      start: "top 50%",
      end: "top 20%",
    }
  })
  tl.from(".leftabout .circle-line .line", {
    y: 100,
    duration: 1,
    opacity: 0,
    stagger: 1,
    scrollTrigger:{
      trigger: ".line",
      scroll: "body",
      scrub: 1,
      start: "top 50%",
      end: "top 20%",
    }
  })
  tl.from(".leftabout .about-details .personal-info", {
    y: 100,
    duration: 1,
    opacity: 0,
    stagger: 1,
    scrollTrigger:{
      trigger: ".circle",
      scroll: "body",
      scrub: 1,
      start: "top 50%",
      end: "top 20%",
    }
  })
  tl.from(".leftabout .about-details .education", {
    y: 100,
    duration: 1,
    opacity: 0,
    stagger: 1,
    scrollTrigger:{
      trigger: ".circle",
      scroll: "body",
      scrub: 1,
      start: "top 40%",
      end: "top 20%",
    }
  })
  tl.from(".leftabout .about-details .skills", {
    y: 100,
    duration: 1,
    opacity: 0,
    stagger: 1,
    scrollTrigger:{
      trigger: ".circle",
      scroll: "body",
      scrub: 1,
      start: "top 30%",
      end: "top 20%",
    }
  })
  tl.from(".rightabout >*", {
    duration: 1,
    opacity: 0,
    stagger: 1,
    scrollTrigger:{
      trigger: ".rightabout",
      scroll: "body",
      scrub: 1,
      start: "top 50%",
      end: "top 20%",
    }
  })
})

  return (
    <div id="about">
      <div className="leftabout">
        <div className="circle-line">
          <div className="circle">
          </div>
          <div className="line">
          </div>
          <div className="circle">
          </div>
          <div className="line">
          </div>
          <div className="circle">
          </div>
        </div>
        <div className="about-details">
          <div className="personal-info">
            <h1>Personal Info</h1>
            <ul>
              <li>
                <span>NAME
                </span> : MUHAMMAD RAIHAN YAZID
              </li>
              <li>
                <span>AGE
                </span> : 23 YEARS
              </li>
              <li>
                <span>GENDER
                </span> : MALE
              </li>
              <li>
                <span>LANGUAGE KNOWN
                </span> : ENGLISH, INDONESIAN
              </li>
            </ul>
          </div>
          <div className="education">
            <h1>Education</h1>
            <ul>
              <li>
                <span>DEGREE
                </span> : BACHELOR DEGREE
              </li>
              <li>
                <span> MAJOR
                </span> : HADITH SCIENCE
              </li>
              <li>
                <span>GPA
                </span> : 3.69/4
              </li>
            </ul>
          </div>
          <div className="skills">
            <h1>Skills</h1>
            <ul>
              <li>
                Web Development
              </li>
              <li>
                Data Analytics
              </li>
              <li>
                AI
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="rightabout">
      <Card title="WEB DEVELOPER" image={webImg}/>
      <Card title="DATA ANALYTICS" image={dataImg}/>
      <Card title="AI" image={aiImg}/>
      </div>
    </div>
  )
}

export default About
