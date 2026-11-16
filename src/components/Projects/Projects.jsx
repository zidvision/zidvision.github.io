import React from 'react'
import "./Projects.css"
import Card from '../Card/Card'
import hrisImg from "./../../assets/hris_app.png"
import kpiImg from "./../../assets/kpi_app.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)
const Projects = () => {

useGSAP(()=>{
const tl = gsap.timeline()
tl.from("#projects-title", {
  y:100,
  duration:0.6,
  opacity:0,
  scrollTrigger:{
      trigger: "#projects-title",
      scroll: "body",
      scrub: 1,
      start: "top 50%",
      end: "top 20%",
    }
})

tl.from(".slider >*", {
  duration:1,
  opacity:0,
  stagger:1,
  scrollTrigger:{
      trigger: "#projects-title",
      scroll: "body",
      scrub: 1,
      start: "top 40%",
      end: "top 20%",
    }
})
})


  return (
    <div id="projects">
        <h1 id='projects-title'>PROJECTS EXPERIENCED</h1>
        <div className="slider">
            <Card title="KPI APP" image={kpiImg} />
            <Card title="HRIS APP" image={hrisImg} />
        </div>
    </div>
  )
}

export default Projects
