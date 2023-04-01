import React, { useContext } from 'react'
import AuthContext from '../components/AuthContext/AuthContext'
import imgEuropa from "../components/assets/destination/image-europa.png"

const Destination = () => {
    const ctx = useContext(AuthContext)
    console.log(ctx);
    return (
        <div>
            <div className="container">
                <h1>Pick your Destination</h1>
                <img src={imgEuropa} alt="img-europa" />
            </div>
        </div>
    )
}

export default Destination