import React from 'react'
import "./sass/NavBar.scss"
import Logo from "./assets/shared/logo.svg"

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="img">
                <img src={Logo} />
            </div>
        </div>
    )
}

export default NavBar