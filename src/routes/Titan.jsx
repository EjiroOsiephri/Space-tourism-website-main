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

const Titan = () => {
    const ctx = useContext(AuthContext)
    console.log(ctx);
    return (
        <div className={Styled.all}>
            <NavBar number={2} />
            <div className={Styled.Container}>
                <div className={Styled["first-container-details"]}>
                    <h1><span>01</span> Pick your Destination</h1>
                    <div className={Styled.img}>
                        <img src={imgtitan} alt="img-europa" />
                    </div>
                </div>
                <div className={Styled["second-details-moon-container"]}>
                    <div className={Styled.links}>
                        <Link to='/moon'>Moon</Link>
                        <Link to='/mars'>Mars</Link>
                        <Link to='/europa'>Europa</Link>
                        <Link className={Styled.border} to='/titan'>Titan</Link>
                    </div>
                    <div className={Styled.typography}>
                        <h1>Titan</h1>
                        <h4>The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</h4>
                    </div>
                    <hr />
                    <div className={Styled["flex-container"]}>
                        <div className={Styled["first-flex-container"]}>
                            <h5>AVG. DISTANCE</h5>
                            <h3>1.6 BIL. km</h3>
                        </div>
                        <div className={Styled["second-flex-container"]}>
                            <h5>EST. TRAVEL TIME</h5>
                            <h3>7 years</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Titan