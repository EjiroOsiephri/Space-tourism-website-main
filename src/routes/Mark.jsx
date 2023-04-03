import React from 'react'
import NavBar from './NavBar'
import Styled from '../components/sass/Crew.module.scss'
import Marks from "../components/assets/crew/image-mark-shuttleworth.png"
import { Route, Routes, Link } from "react-router-dom"

const Mark = () => {
    return (
        <div className={Styled['crew-home']}>
            <NavBar number={3} />
            <div className={Styled["crew-home-page"]}>
                <div className={Styled["first-flex-containers"]}>
                    <h1><span>02</span>MEET YOUR CREW</h1>
                    <h3>Mission Specialist</h3>
                    <h2>Mark Shuttleworth</h2>
                    <h5>Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</h5>
                    <div className={Styled["button-navigator"]}>
                        <Link to='/crew'><button></button></Link>
                        <Link><button className={Styled.color}></button></Link>
                        <Link><button></button></Link>
                        <Link><button></button></Link>
                    </div>

                </div>
                <div className="second-flex-container">
                    <img src={Marks} />
                </div>
            </div>
        </div>
    )
}

export default Mark