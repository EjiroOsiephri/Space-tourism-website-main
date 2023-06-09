import React from 'react'
import NavBar from './NavBar'
import Styled from '../components/sass/Crew.module.scss'
import Douglas from "../components/assets/crew/image-douglas-hurley.webp"
import { Route, Routes, Link } from "react-router-dom"

const Crew = () => {
    return (
        <div className={Styled['crew-home']}>
            <NavBar number={3} />
            <div className={Styled["crew-home-page"]}>
                <div className={Styled["first-flex-containers"]}>
                    <h1><span>02</span>MEET YOUR CREW</h1>
                    <h3>Commander</h3>
                    <h2>Douglas Hurley</h2>
                    <h5>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</h5>
                    <div className={Styled["button-navigator"]}>
                        <Link><button className={Styled.color}></button></Link>
                        <Link to='/mark'><button></button></Link>
                        <Link to='/victor'><button></button></Link>
                        <Link to='/ansari'><button></button></Link>
                    </div>
                </div>
                <div className="second-flex-container">
                    <img src={Douglas} />
                </div>
            </div>
        </div>
    )
}

export default Crew