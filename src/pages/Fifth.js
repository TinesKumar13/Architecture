import React from 'react'
import smiley from "../icons/Smiley.png"
import button from "../icons/Group 1.png"
const Fifth = () => {
    return (
        <div className="fifth__Main">
            <div className="fifth__Container">
                <div className="image__Container">
                <img src={smiley} alt="" />

                </div>
                <header>
                    <h1>Take advantage of <br />business oppurtunities at <br /> the <span>tip</span> of your fingers</h1>
            <p>Proin porttitor, dui aliquam gravida molestie, nibh nulla tincidunt sapien, eget imperdiet dui nunc in purus.</p>
            <div className="learn__More">
                    <h3>Learn More</h3>
                    <img src={button} alt="" />
                </div>
                </header>


            </div>
        </div>
    )
}

export default Fifth
