import React from 'react'
import Navigation from '../components/Navigation'
import logoUnklab from '../assets/img/logoUnklab.png'
import logoDicoding from '../assets/img/logoDicoding.png'
import Footer from '../components/Footer'

const wrap ={
  marginLeft: '155px',
  marginRight: '155px',
  marginTop: '72px',
  display: 'flex',
  flexDirection: 'row'
}

const AboutUs = () => {
  return (
    <>
        <Navigation />     
        <div style={wrap}>
          <div style={{marginRight: '300px'}}>
            <h5>About</h5>
            <h4>WHO ARE WE?</h4>
            <h3>
            A community in Universitas Klabat that is supported by Google Developers helps developers and people who are interested in technology to learn, connect, and solve local problems with technology
            </h3>
            <h3>
            By collaborating with Google, students from all backgrounds come together and learn, collaborate and work on new technologies. We nurture a culture of collaboration to make an impact in the local community and bring tech opportunities and careers to all
            </h3>
            <h3>
            We currently have six divisions: Artificial intelligence, Mobile Development, UI/UX, Product Management, Internet of Things and Web Development. With the six divisions, we will be organizing many exciting events such as ted-style talks, hackathons, hands-on/learning workshops, networking events, and much more!
            </h3>            
          </div>

          <div style={{marginTop: '150px'}}>
            <h2>Sponsored By</h2>
            <img style={{marginLeft: '40px'}} src={logoUnklab} alt="Logo Unklab" />

            <h2>Supported By</h2>
            <img src={logoDicoding} alt="Logo Dicoding" />
          </div>
        </div>
        <Footer />
    </>
  )
}

export default AboutUs