import React, { useContext } from 'react'
import { Route, Routes, Link } from "react-router-dom"
import AuthContext from '../components/AuthContext/AuthContext'
import imgEuropa from "../components/assets/destination/image-europa.png"
import imgmoon from "../components/assets/destination/image-moon.png"
import imgmars from "../components/assets/destination/image-mars.png"
import imgtitan from "../components/assets/destination/image-titan.png"
import NavBar from './NavBar'
import Styled from "../components/sass/destination.module.scss"
import Host from './Host'

const Moon = () => {
    const ctx = useContext(AuthContext)
    console.log(ctx);
    return (
        <div>
            <NavBar number={2} />
            <div className={Styled.Container}>
                <div className={Styled["first-container-details"]}>
                    <h1><span>01</span> Pick your Destination</h1>
                    <img src={imgmoon} alt="img-europa" />
                </div>
                <div className={Styled["second-details-moon-container"]}>
                    <div className="links">
                        <Link to='/moon'>Moon</Link>
                        <Link to='/mars'>Mars</Link>
                        <Link to='/europa'>Europa</Link>
                        <Link to='/titan'>Titan</Link>
                    </div>
                    <div className={Styled.typography}>
                        <h1>Moon</h1>
                        <h4>{ctx.imgMoonText}</h4>
                    </div>
                    <hr />
                    <div className="flex-container">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Moon