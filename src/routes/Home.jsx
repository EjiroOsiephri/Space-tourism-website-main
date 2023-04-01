import React from 'react'
import NavBar from './NavBar'
import Styled from '../components/sass/home.module.scss'

const Home = () => {
    return (
        <div>
            <NavBar />
            <div className={Styled["home-container"]}>
                <div className={Styled.firstContainer}>
                    <h4>SO, YOU WANT TO TRAVEL TO</h4>
                    <h1>SPACE</h1>
                    <h5>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</h5>
                </div>
                <div className={Styled["button-container"]}>
                    <button>EXPLORE</button>
                </div>
            </div>
        </div>
    )
}

export default Home