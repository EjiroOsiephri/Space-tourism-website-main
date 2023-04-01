import React, { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import Home from "./routes/Home"
import Destination from "./routes/Destination"
import Crew from './routes/Crew'
import Technology from './routes/Technology'
import AuthContext from './components/AuthContext/AuthContext'


function App() {
    return (
        <AuthContext.Provider value={{
            imgEuropa: 'image-europa.png',
            imgMoon: 'image-moon.png',
            imgMars: 'image-mars.png',
            imgTitan: 'image-titan.png',
        }}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/destination' element={<Destination />} />
                <Route path='/crew' element={<Crew />} />
                <Route path='/technology' element={<Technology />} />
            </Routes>
        </AuthContext.Provider>
    )
}

export default App
