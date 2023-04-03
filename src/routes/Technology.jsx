import React from 'react'
import NavBar from './NavBar'
import spaceShuttle from "../components/assets/technology/image-launch-vehicle-landscape.jpg"
import { Route, Routes, Link } from "react-router-dom"
import Styled from "../components/sass/technology.module.scss"

const Technology = () => {
    return (
        <div className={Styled.enclosed}>
            <NavBar number={4} />
            <h1><span>03</span>SPACE LAUNCH 101</h1>
            <div className={Styled['allContainer']}>
                <div className={Styled.container}>
                    <div className={Styled["first-div-container"]}>
                        <div className={Styled["button-container"]}>
                            <Link ><button>1</button></Link>
                            <Link><button>2</button></Link>
                            <Link ><button>3</button></Link>
                        </div>
                    </div>
                    <div className={Styled["typo-Container"]}>
                        <p>THE TERMINOLOGY…</p>
                        <h2>LAUNCH VEHICLE</h2>
                        <h5>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</h5>
                    </div>
                </div>
                <div className={Styled["second-flex-container"]}>
                    <img src={spaceShuttle} />
                </div>
            </div>
        </div>
    )
}

export default Technology