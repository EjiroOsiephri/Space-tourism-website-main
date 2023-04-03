import React from 'react'
import NavBar from './NavBar'
import SpaceCapsule from "../components/assets/technology/image-space-capsule-landscape.jpg"
import { Route, Routes, Link } from "react-router-dom"
import Styled from "../components/sass/technology.module.scss"

const SpaceCapsules = () => {
    return (
        <div className={Styled.enclosed}>
            <NavBar number={4} />
            <h1><span>03</span>SPACE LAUNCH 101</h1>
            <div className={Styled['allContainer']}>
                <div className={Styled.container}>
                    <div className={Styled["first-div-container"]}>
                        <div className={Styled["button-container"]}>
                            <Link to='/technology'><button className={Styled['button']}>1</button></Link>
                            <Link to='/spaceport'><button className={Styled['button']}>2</button></Link>
                            <Link><button className={Styled['color button']}>3</button ></Link>
                        </div>
                    </div>
                    <div className={Styled["typo-Container"]}>
                        <p>THE TERMINOLOGY…</p>
                        <h2>SPACE CAPSULE</h2>
                        <h5>A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.</h5>
                    </div>
                </div>
                <div className={Styled["second-flex-container"]}>
                    <img src={SpaceCapsule} />
                </div>
            </div>
        </div>
    )
}

export default SpaceCapsules