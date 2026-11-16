import React from 'react'
import "./Contact.css"
import contact from "./../../assets/contact.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)
const Contact = () => {

useGSAP(()=>{
const tl = gsap.timeline()
tl.from(".leftcontact img", {
  y:100,
  x:-100,
  duration:0.6,
  opacity:0,
  scrollTrigger:{
      trigger: ".leftcontact",
      scroll: "body",
      scrub: 1,
      start: "top 50%",
      end: "top 20%",
    }
})
tl.from(".rightcontact form", {
  duration:1,
  opacity:0,
  scrollTrigger:{
      trigger: ".leftcontact",
      scroll: "body",
      scrub: 1,
      start: "top 50%",
      end: "top 20%",
    }
})
})    
  return (
    <div id="contact">
        <div className="leftcontact">
            <img src={contact} alt="contact" />
        </div>
        <div className="rightcontact">
            <form action="https://formspree.io/f/xvkazvor" method='POST'>
                <input type="text" name='username' placeholder='Name' />
                <input type="email" name='email' placeholder='Email' />
                <textarea name="message" id="textarea" placeholder='Message Me'></textarea>
                <input type="submit" id="btn" value="Submit"/>
            </form>
        </div>
    </div>
  )
}

export default Contact
