import React, { useState } from 'react'
import menu from "../icons/Menu.png"
const Nav = () => {

    const [toggle,setToggle] = useState(false)
    return (
        <div className="nav__Main">
            <header className="nav__Container">
                <div className="logo">
                    <h1>ATELIER</h1>
                </div>
                <div className={toggle ? "menu__Active" : "menu__Container"} onClick = {() => setToggle(!toggle)}>
                    <img src={menu} alt="" />
                </div>

                <div className={toggle ? "side__Menu" : "side__Close"}>
                   <ul>
                       <li>Home</li>
                       <li>About Us</li>
                       <li>Contact Us</li>
                   </ul>
                </div>
            </header>
        </div>
    )
}

export default Nav
