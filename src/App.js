import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, Division, Events, AboutUs, WebDev, MobDev, Ai, Pm, UiUx, Iot } from './pages'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />      
      <Route path="events" element={<Events />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path='/webDev' element={< WebDev/>} />
      <Route path='/mobDev' element={< MobDev/>} />
      <Route path='/ai' element={< Ai/>} />
      <Route path='/pm' element={< Pm/>} />
      <Route path='/uiUx' element={< UiUx/>} />
      <Route path='/iot' element={< Iot/>} />
    </Routes>
  )  
}

export default App