import React from 'react'
import NavBar from './NavBar'
import Styled from '../components/sass/Crew.module.scss'
import Ansari from "../components/assets/crew/image-anousheh-ansari.png"
import { Route, Routes, Link } from "react-router-dom"

const AnsariPage = () => {
    return (
        <div className={Styled['crew-home']}>
            <NavBar number={3} />
            <div className={Styled["crew-home-page"]}>
                <div className={Styled["first-flex-containers"]}>
                    <h1><span>02</span>MEET YOUR CREW</h1>
                    <h3>Flight Engineer</h3>
                    <h2>Anousheh Ansari</h2>
                    <h5>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. </h5>
                    <div className={Styled["button-navigator"]}>
                        <Link to='/crew'><button></button></Link>
                        <Link to="/mark"><button></button></Link>
                        <Link to='/victor'><button></button></Link>
                        <Link><button className={Styled.color}></button></Link>
                    </div>

                </div>
                <div className="second-flex-container">
                    <img src={Ansari} />
                </div>
            </div>
        </div>
    )
}

export default AnsariPage