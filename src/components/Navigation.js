import React from 'react'
import { Link } from "react-router-dom"
import logoGDSC from "../assets/img/logoGDSC.png"

const styles={
    marginTop: '10px',
    paddingBottom: '5px',
    display: 'flex',
    flexDirection: 'row',    
    borderBottom: '2px solid #000000',
}

const styleLogo={    
    float: 'left',
    marginRight: '900px',
    marginLeft: '13px',
}
const styleNavBar={
    marginTop: '15px',
    fontWeight: 'bold',
    fontSize: '20px',    
    
}

const Navigation = () => {
  return (
    <nav>                
        <div>                                           
            <div style={styles}>                
                <img style={styleLogo} src={logoGDSC} alt="CreateAccount" />        
                <Link style={styleNavBar} className="nav-link me-2" aria-current="page" to="/"> Home </Link>                
                <div style={styleNavBar} className="dropdown">
                    <button style={{marginTop: "0px", fontSize: "20px", fontWeight: 'bold', paddingTop: '0px'}} className='btn dropdown-toggle' type='button' data-bs-toggle="dropdown" aria-expanded="false">
                        Division
                    </button>
                    <ul className='dropdown-menu'>
                        <li><Link className="nav-link me-2 dropdown-item" to="/WebDev"> WebDev </Link></li>
                        <li><Link className="nav-link me-2 dropdown-item" to="/MobDev"> MobDev </Link></li>
                        <li><Link className="nav-link me-2 dropdown-item" to="/Ai"> AI </Link></li>
                        <li><Link className="nav-link me-2 dropdown-item" to="/UiUx"> UI/UX </Link></li>
                        <li><Link className="nav-link me-2 dropdown-item" to="/Iot"> IOT </Link></li>
                        <li><Link className="nav-link me-2 dropdown-item" to="/Pm"> PM </Link></li>
                    </ul>                    
                </div>
                <Link style={styleNavBar} className="nav-link me-2" to="/events"> Events </Link>       
                <Link style={styleNavBar} className="nav-link me-2" to="/aboutUs"> About Us</Link>                                
            </div>
        </div>                
    </nav> 
  )
}

export default Navigation