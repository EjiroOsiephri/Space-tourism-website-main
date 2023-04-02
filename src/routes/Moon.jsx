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
        <div className={Styled.all}>
            <NavBar number={2} />
            <div className={Styled.Container}>
                <div className={Styled["first-container-details"]}>
                    <h1><span>01</span> Pick your Destination</h1>
                    <div className={Styled.img}>
                        <img src={imgmoon} alt="img-europa" />
                    </div>
                </div>
                <div className={Styled["second-details-moon-container"]}>
                    <div className={Styled.links}>
                        <Link className={Styled.border} to='/moon'>Moon</Link>
                        <Link to='/mars'>Mars</Link>
                        <Link to='/europa'>Europa</Link>
                        <Link to='/titan'>Titan</Link>
                    </div>
                    <div className={Styled.typography}>
                        <h1>Moon</h1>
                        <h4>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</h4>
                    </div>
                    <hr />
                    <div className={Styled["flex-container"]}>
                        <div className={Styled["first-flex-container"]}>
                            <h5>AVG. DISTANCE</h5>
                            <h3>384,400 km</h3>
                        </div>
                        <div className={Styled["second-flex-container"]}>
                            <h5>EST. TRAVEL TIME</h5>
                            <h3>3 days</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Moon