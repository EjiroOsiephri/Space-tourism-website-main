import React from 'react'
import NavBar from './NavBar'
import Styled from '../components/sass/Crew.module.scss'

const Crew = () => {
    return (
        <div className={Styled['crew-home']}>
            <NavBar number={3} />
            <div className="first-flex-container">
                <h1><span>02</span>MEET YOUR CREW</h1>
                <h3>Commander</h3>
                <h2>Douglas Hurley</h2>
                <h5>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</h5>
            </div>
            <div className="second-flex-container">

            </div>
        </div>
    )
}

export default Crew