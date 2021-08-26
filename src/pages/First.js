import React from 'react'
import button from "../icons/Button.png"
import line from "../icons/Line.png"
import Rectangle from "../icons/Rectangle.png"

const First = () => {
    return (
        <div className="first__Main">
           <div className="first__Container">
               <div className="description__Text">
                   <h1>Architectures beyond <br/> your imaginations. <br/> Limitless Creativity</h1>
                   <div className="learn__More">
                       <h2>Learn More</h2>
                       <img src={button} alt="" />
                   </div>
               </div>

<div className="image__Holder">
<img className="rectangle" src={Rectangle} alt="" />
<img className="line__Deco" src={line} alt="" />

</div>

           </div>
           
        </div>
    )
}

export default First
