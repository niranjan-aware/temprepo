import React from 'react'
import { Link } from 'react-router-dom'

export default function Select() {
    return (
        <div className="text-center">
            <h1 className="title">SELECT DOCUMENT TYPE:</h1>
            <Link to="/certificate">
                <button className="primary-button">GRADUATION CERTIFICATE</button>
            </Link>
        </div>
    )
}