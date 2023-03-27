import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import Home from "./routes/Home"
import Destination from "./routes/Destination"
import Crew from './routes/Crew'
import Technology from './routes/Technology'


function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/destination' element={<Destination />} />
                <Route path='/crew' element={<Crew />} />
                <Route path='/technology' element={<Technology />} />
            </Routes>
        </div>
    )
}

export default App
