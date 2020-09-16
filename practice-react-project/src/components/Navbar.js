import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { MdFingerprint} from "react-icons/all"
import { FaBars, FaTimes} from "react-icons/all";
import App from "../App";


function Navbar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    // TODO: start at 20:51, Learn states and how they work for first two constants.

    return(
        <>
         <div className="navbar">
             <div className="navbar-container container">
                 <Link to='/' className="navbar-logo">
                     <MdFingerprint className='navbar-icon' />
                     UNICORN
                 </Link>
                 <div className="menu-icon" onClick={handleClick}>
                     {click ? <FaTimes /> : <FaBars />}
                 </div>
             </div>
         </div>
        </>
    )
}
export default Navbar;