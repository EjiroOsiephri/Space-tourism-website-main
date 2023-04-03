import React, { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import Home from "./routes/Home"
import Destination from "./routes/Moon"
import Crew from './routes/Crew'
import Technology from './routes/Technology'
import AuthContext from './components/AuthContext/AuthContext'
import Mars from './routes/Mars'
import Moon from "./routes/Moon"
import Europa from './routes/Europa'
import Titan from './routes/Titan'
import Mark from './routes/Mark'
import VictorPage from './routes/Victor'
import AnsariPage from './routes/Ansari'
import SpaceCapsules from './routes/SpaceCapsule'
import SpacePorts from './routes/SpacePort'

function App() {
    return (
        <AuthContext.Provider value={{
            imgMoonText: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.'
        }}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/destination' element={<Destination />} />
                <Route path='/crew' element={<Crew />} />
                <Route path='/technology' element={<Technology />} />
                <Route path='/moon' element={<Moon />} />
                <Route path='/mars' element={<Mars />} />
                <Route path='/europa' element={<Europa />}> </Route>
                <Route path='/titan' element={<Titan />} />
                <Route path='/mark' element={<Mark />} />
                <Route path='/victor' element={<VictorPage />} />
                <Route path='/ansari' element={<AnsariPage />} />
                <Route path='/spaceport' element={<SpacePorts />} />
                <Route path='/spacecapsule' element={<SpaceCapsules />} />
            </Routes>
        </AuthContext.Provider>
    )
}

export default App
