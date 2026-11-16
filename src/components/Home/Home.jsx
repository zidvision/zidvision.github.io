import React, {useRef} from 'react'
import "./Home.css"
import hero from "../../assets/robot-hero.png"
import { Typewriter } from 'react-simple-typewriter'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Home = () => {

useGSAP(()=>{
const tl = gsap.timeline()
tl.from(".line1", {
  y:-100,
  duration:0.6,
  opacity:0
})
tl.from(".line2", {
  y:-100,
  duration:0.6,
  opacity:0
})
tl.from(".line3", {
  x:100,
  duration:0.6,
  opacity:0
})
tl.from(".homedetails button", {
  y:100,
  duration:0.6,
  opacity:0
})
tl.from(".righthome img", {
  x:100,
  duration:1,
  opacity:0
})
})

  return (
    <div id="home">
      <div className="lefthome">
        <div className="homedetails">
          <div className="line1">I'M</div>
          <div className="line2">RAIHAN YAZID</div>
          <div className="line3">
            <Typewriter
              words={['WEB DEVELOPER', 'DATA ANALYST', 'AI ENTHUSIAST']}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
          <button>HIRE ME</button>
        </div>
      </div>

      <div className="righthome">
        <img src={hero} alt="hero"/>

      </div>
    </div>
  )
}

export default Home
