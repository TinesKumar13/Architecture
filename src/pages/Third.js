import React from 'react'
import arrow from "../icons/Arrow 2.png"
import icon from "../icons/Group 1.png"

const Third = () => {
    return (
        <div className="third__Main">
            <div className="cover__Div"></div>
            <div className="third__Container">
<div className="info__Container">
    <h2>Get to know more about <br/> ATELIER now at our hubs</h2>
    <div className="link__To">
        <h2>Visit the hub.</h2>
        <img src={arrow} alt="" />
    </div>
</div>

<div className="third__Description">
    <h2>45 Years Of Experience <br /> <span>4 Teams </span> 3 Solutions</h2>
    <p> Proin porttitor, dui aliquam gravida molestie, nibh nulla tincidunt sapien, eget imperdiet dui nunc in purus.</p>
    <div className="learn__More">
        <h1>Learn More</h1>
        <img src={icon} alt="" />
    </div>
</div>
            </div>
        </div>
    )
}

export default Third
