import React, { useContext } from 'react'
import AuthContext from '../components/AuthContext/AuthContext'
import imgEuropa from "../components/assets/destination/image-europa.png"
import imgmoon from "../components/assets/destination/image-moon.png"
import imgmars from "../components/assets/destination/image-mars.png"
import imgtitan from "../components/assets/destination/image-titan.png"
import NavBar from './NavBar'

const Destination = () => {
    const ctx = useContext(AuthContext)
    console.log(ctx);
    return (
        <div>
            <NavBar number={2} />
            <div className="container">
                <div className="first-container-details">
                    <h1><span>01</span> Pick your Destination</h1>
                    <img src={imgmoon} alt="img-europa" />
                </div>
            </div>
        </div>
    )
}

export default Destination