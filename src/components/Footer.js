import React from 'react'
import LinkedIn from '../assets/img/LinkedIn.png'
import Ig from '../assets/img/Ig.png'

const wrap={
    display: 'flex',
    flexDirection: 'row',
    marginTop: '50px',    

}

const Bold={
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginLeft: '20px',
    marginTop: '20px'
}

const Regular={
    color: '#FFFFFF',
    marginLeft: '20px',
}

const Footer = () => {
  return (
    <div style={{backgroundColor: '#37383A', paddingBottom: '10px'}}>
        <div style={wrap}>
            <div style={Bold}>
                <p>FOLLOW US</p>
                <div>
                    <img src={LinkedIn} alt ="LinkedIn" />
                    <img src ={Ig} alt= " Instagram" />
                </div>
            </div>
            <div>
                <p style={Bold}>LOCATION</p>
                <p style={Regular}>Jl. Arnold Mononutu, Airmadidi, <br/>Minahasa Utara, Sulawesi Utara, 95371</p>
            </div>        
        </div>
            <p style={Regular}>© All rights reserved.</p>
            <p style={Regular}>made by Core Team GDSC</p>        
    </div>
  )
}

export default Footer