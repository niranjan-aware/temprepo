import React from 'react'
import { Link } from 'react-router-dom'
// import './App.css';
export default function Home() {
    return (
        <header style={ HeaderStyle }>
            <h1 className="main-title text-center">WCE VERIFICATION PORTAL</h1>
            <p className="main-para text-center"> </p>
            <div className="buttons text-center">
                <Link to="/login">
                    <button className="primary-button">ISSUE VERIFIED DOCUMENT</button>
                </Link>
                <Link to="/Hash">
                    <button className="primary-button" id="reg_btn"><span>VALIDATE THE DOCUMENT </span></button>
                </Link>
            </div>
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}

