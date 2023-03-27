import React from 'react'
import NavBar from "../components/NavBar"
import "../components/sass/Home.scss"

const Home = () => {
    return (
        <div className='home'>
            <div className="navbar">
                <NavBar></NavBar>
            </div>
        </div>
    )
}

export default Home