import React from 'react'
import './about.css'
import pic1 from './Rathi1.png'
import pic2 from './Peter-Edite.jpg'
const About = () => {
  return (
    <>
      <div class="about-section">
        <h1>About Us Page</h1>
        <p>Some text about who we are and what we do.</p>
      </div>
      <h2 className='ourteam'>Our Team</h2>
      <div class="row">
        <div class="column">
          <div class="card">
            <img src={pic2} alt="Jane" />
            <div class="container">
              <h2>Peter Kern</h2>
              <p class="title">CEO & Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>jane@example.com</p>
              <p><button class="button">Contact</button></p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img src={pic1} alt="Mike" />
            <div class="container">
              <h2>Rathi Murthy</h2>
              <p class="title">Art Director</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>mike@example.com</p>
              <p><button class="button">Contact</button></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About