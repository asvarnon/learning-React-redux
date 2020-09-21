import React from 'react'
import '../App.css';
import Clock from './Clock'
import {Link} from 'react-router-dom'
import Shop from "./Shop";


function Nav() {
    const navStyle ={
        color: "white"
    };

    return(
        <nav>
            <h3>LOGO</h3>
            <ul className="nav-links">
                <Link style={navStyle} to='/about'>
                    <li>About</li>
                </Link>
                <Link style={navStyle} to='/shop'>
                    <li>Shop</li>
                </Link>
                <Link style={navStyle} to='/tweets'>
                    <li>Tweets</li>
                </Link>
                <Link style={navStyle} to='/counter'>
                    <li>Counter</li>
                </Link>
            </ul>
            <Clock />
        </nav>
    )
}


export default Nav;