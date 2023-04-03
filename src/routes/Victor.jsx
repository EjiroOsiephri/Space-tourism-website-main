import React from 'react'
import NavBar from './NavBar'
import Styled from '../components/sass/Crew.module.scss'
import Victor from "../components/assets/crew/image-victor-glover.png"
import { Route, Routes, Link } from "react-router-dom"

const VictorPage = () => {
    return (
        <div className={Styled['crew-home']}>
            <NavBar number={3} />
            <div className={Styled["crew-home-page"]}>
                <div className={Styled["first-flex-containers"]}>
                    <h1><span>02</span>MEET YOUR CREW</h1>
                    <h3>PILOT</h3>
                    <h2>Victor Glover</h2>
                    <h5>Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. </h5>
                    <div className={Styled["button-navigator"]}>
                        <Link to='/crew'><button></button></Link>
                        <Link to='/mark'><button></button></Link>
                        <Link><button className={Styled.color}></button></Link>
                        <Link to="/ansari"><button></button></Link>
                    </div>

                </div>
                <div className="second-flex-container">
                    <img src={Victor} />
                </div>
            </div>
        </div>
    )
}

export default VictorPage