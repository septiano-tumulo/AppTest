import React from 'react'
import Navigation from '../components/Navigation'
import '../assets/css/events.css'
import DesignSprint from '../assets/img/DesignSprint.png'
import infoSession from '../assets/img/infoSession.png'
import GCP from '../assets/img/GCP.png'
import Footer from '../components/Footer'

const Events = () => {
  return (
    <>
        <Navigation />
        <div className="wrapEvents">
          <div>
            <h5>ENJOY YOUR EVENTS</h5>
            <h3 style={{marginBottom: '36px'}}>Selected event</h3>
          </div>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <div>
              <img src={DesignSprint} alt="Design Sprint" />
              <h5>Design Sprint</h5>
              <p>Solution challenge 2023</p>
            </div>

            <div>
              <img src={infoSession} alt="Info Session" />
              <h5>Info Session: Road to Solution Challenge</h5>
              <p>Solution challenge 2023</p>
            </div>

            <div>
              <img src={GCP} alt= "GCP" />
              <h5>Google Cloud: Juara GCP</h5>
              <p>Core Team Web Development</p>
            </div>

          </div>
          
          <div className='beevy'>
            <h4>Want to see more?</h4>
            <p>Open beevy</p>
          </div>
        </div>
        <Footer />
    </>
  )
}

export default Events