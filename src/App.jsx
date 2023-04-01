import React, { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import Home from "./routes/Home"
import Destination from "./routes/Destination"
import Crew from './routes/Crew'
import Technology from './routes/Technology'


function App() {
    return (
        <React.Fragment>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/destination' element={<Destination />} />
                <Route path='/crew' element={<Crew />} />
                <Route path='/technology' element={<Technology />} />
            </Routes>
        </React.Fragment>
    )
}

export default App
