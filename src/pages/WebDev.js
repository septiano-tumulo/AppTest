import React from 'react'
import Navigation from '../components/Navigation'
import webSeptiano from '../assets/img/webSeptiano.png'
import '../assets/css/webDev.css'
import Footer from '../components/Footer'

const WebDev = () => {
  return (
    <>
        <Navigation />          
        <div>          
          <h1 style={{textAlign: 'center', fontSize: '28px', marginTop: '50px'}}>WE ARE CORE TEAM OF WEB DEVELOPMENT</h1>
          <div style={{display: 'flex' ,flexDirection: 'row', marginLeft: '352px'}}>
            <div className='fotoAtas'>
              <img src={webSeptiano} alt="Septiano" />
              <h5>Septiano Tumulo</h5>
            </div>
            <div className='fotoAtas'>
              <img src={webSeptiano} alt="Septiano" />
              <h5>Septiano Tumulo</h5>
            </div>
            <div className='fotoAtas'>
              <img src={webSeptiano} alt="Septiano" />
              <h5>Septiano Tumulo</h5>
            </div>
            <div className='fotoAtas'>
              <img src={webSeptiano} alt="Septiano" />
              <h5>Septiano Tumulo</h5>
            </div>
          </div>

          <div style={{display: 'flex', flexDirection: 'row', marginLeft: '459px'}}>
            <div className='fotoBawah'>
                <img src={webSeptiano} alt="Septiano" />
                <h5>Septiano Tumulo</h5>
              </div>
              <div className='fotoBawah'>
                <img src={webSeptiano} alt="Septiano" />
                <h5>Septiano Tumulo</h5>
              </div>
              <div className='fotoBawah'>
                <img src={webSeptiano} alt="Septiano" />
                <h5>Septiano Tumulo</h5>
              </div>
          </div>          
        </div>
        <Footer />
    </>
  )
}

export default WebDev