import React from 'react'
import NavBar from './NavBar'
import SpacePort from "../components/assets/technology/image-spaceport-landscape.jpg"
import { Route, Routes, Link } from "react-router-dom"
import Styled from "../components/sass/technology.module.scss"

const SpacePorts = () => {
    return (
        <div className={Styled.enclosed}>
            <NavBar number={4} />
            <h1><span>03</span>SPACE LAUNCH 101</h1>
            <div className={Styled['allContainer']}>
                <div className={Styled.container}>
                    <div className={Styled["first-div-container"]}>
                        <div className={Styled["button-container"]}>
                            <Link to='/technology' className='color'><button>1</button></Link>
                            <Link><button>2</button></Link>
                            <Link to="/spacecapsule"><button>3</button></Link>
                        </div>
                    </div>
                    <div className={Styled["typo-Container"]}>
                        <p>THE TERMINOLOGY…</p>
                        <h2>SPACEPORT</h2>
                        <h5>A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.</h5>
                    </div>
                </div>
                <div className={Styled["second-flex-container"]}>
                    <img src={SpacePort} />
                </div>
            </div>
        </div>
    )
}

export default SpacePorts