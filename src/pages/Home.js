import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import logoGDSC2 from '../assets/img/logoGDSC2.png'
import '../assets/css/home.css'

const Home = () => {
  return (
   <>    
    <Navigation />  
    <div>
      <div className='wrap'>
        <p>Hey, Welcome to GDSC UNKLAB</p>         
        <img style={{marginLeft:'200px', marginRight: '95px', height: '300px', weight: '400'}} src={logoGDSC2} alt="LogoGDSC"/>
      </div>      
    </div>

    <div style={{marginTop: '80px', marginLeft: '105px', marginRight: '50px'}}>
      <div>
        <h5>OUR APPROACH</h5>
        <h1>That's how we do it</h1>
      </div>

      <div style={{display: 'flex', flexDirection: 'row', marginTop: '50px'}}>
        <div>
          <h1 style={{fontSize: '70px', color: 'grey'}}>01</h1>        
          <h5>Research & Analysis</h5>
          <p>Culpa Nostrud Commondo ea consequat aliquip
            reprehenderit. Veniam Velit Nostrud Aliquip sunt.
          </p>
        </div>
        <div>
          <h1 style={{fontSize: '70px', color: 'grey'}}>02</h1>
          <h5>Prototyping</h5>
          <p>Culpa Nostrud Commondo ea consequat aliquip
              reprehenderit. Veniam Velit Nostrud Aliquip sunt.
          </p>
        </div>
        <div>
          <h1 style={{fontSize: '70px', color: 'grey'}}>03</h1>
          <h5>Pixel-Perfect UI Design</h5>
          <p>Culpa Nostrud Commondo ea consequat aliquip
              reprehenderit. Veniam Velit Nostrud Aliquip sunt.
          </p>
        </div>
        <div>
          <h1 style={{fontSize: '70px', color: 'grey'}}>04</h1>
          <h5>Development Coding</h5>
          <p>Culpa Nostrud Commondo ea consequat aliquip
              reprehenderit. Veniam Velit Nostrud Aliquip sunt.
          </p>
        </div>
      </div>
    </div>
    <Footer />
   </>
  )
}

export default Home