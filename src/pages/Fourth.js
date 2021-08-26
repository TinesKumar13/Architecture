import React from 'react'

import item1 from "../icons/Group 1.png"
import item2 from "../icons/Group 5.png"
import building1 from "../icons/building1.png"


const Fourth = () => {
    return (
        <div className="fourth__Main">
            <div className="fourth__Container">
                <div className="text__One">
                    <h2>Build Now</h2>
                    <p> Proin porttitor, dui aliquam gravida molestie,.</p>
                    <img src={item1} alt="" />
                </div>
                <div className="text__Two">
                    <h2>Build Now</h2>
                    <p> Proin porttitor, dui aliquam gravida molestie,.</p>
                    <img src={item1} alt="" />
                </div>

                <div className="text__Three">
                    <img className = "building" src={building1} alt="" />
                
                    <h2>Patterns</h2>
                    <img className="three__Image" src={item2} alt="" />
  
                   
                </div>

                <div className="text__Four">
                    <h2>Designs</h2>
                    <p> Proin porttitor, dui aliquam gravida molestie,.</p>
                    <img src={item1} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Fourth
