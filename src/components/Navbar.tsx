import React from "react";
import {NavLink} from 'react-router-dom'

export const Navbar: React.FC = () => {
    return (
    <nav>
        <div className="nav-wrapper light-green px1">
            <a href="/" className="brand-logo">To Do App </a>
            <ul className="right hide-on-med-and-down">
                <li><NavLink to="/">To-do list</NavLink></li>
                <li><NavLink to="/about">Information</NavLink></li>
            </ul>
        </div>
    </nav>
    )
}
