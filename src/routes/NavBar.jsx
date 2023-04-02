import React, { useState } from 'react'
import "../components/sass/Home.scss"
import Logo from "../components/assets/shared/logo.svg"
import { Link } from "react-router-dom"
import { FaTimes, FaBars } from 'react-icons/fa';

const NavBar = (props) => {
    const [show, setShow] = useState(false)

    function showNav() {
        setShow(true)
    }

    function hideNav() {
        setShow(false)
    }
    return (
        <div>
            <div className="navbar">
                <div className="img">
                    <img src={Logo} alt="" />
                </div>
                <div className="grid">
                    <div className="bars">
                        {!show && <FaBars onClick={showNav} />}
                        {show && <FaTimes onClick={hideNav}></FaTimes>}
                    </div>
                    <div className={show ? "flex-container" : "flex-container show"}>
                        <Link to="/"><h1 className={props.number === 1 ? 'border-style' : ''}><span>00</span>Home</h1></Link>
                        <Link to="/destination"><h1 className={props.number === 2 ? 'border-style' : ''}><span>01</span>Destination</h1></Link>
                        <Link to="/crew"><h1><span>02</span>Crew</h1></Link>
                        <Link to="/technology"><h1><span>03</span>Technology</h1></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar