import React from 'react'
import "../components/sass/Home.scss"
import Logo from "../components/assets/shared/logo.svg"
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div>
            <div className="navbar">
                <div className="img">
                    <img src={Logo} alt="" />
                </div>
                <div className="line">
                </div>
                <div className="flex-container">
                    <Link to="/"><h1 className='border-style'><span>00</span>Home</h1></Link>
                    <Link to="/destination"><h1><span>01</span>Destination</h1></Link>
                    <Link to="/crew"><h1><span>02</span>Crew</h1></Link>
                    <Link to="/technology"><h1><span>03</span>Technology</h1></Link>
                </div>
            </div>
        </div>
    )
}

export default Home