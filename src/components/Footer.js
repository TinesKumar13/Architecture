import React from 'react'
import instagram from "../icons/Instagram Circle.png"
import facebook from "../icons/Facebook logo.png"
import twitter from "../icons/Twitter Circled.png"
import linkedin from "../icons/LinkedIn Circled.png"

const Footer = () => {
    return (
        <div className="footer__Main">
            <div className="footer__Container">
                <div className="icons__Main">
                <div className="icons__Container">
                    <h1>ATELIER</h1>
                  
                        <img src={instagram} alt="" />
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                        <img src={linkedin} alt="" />

                    </div>


                <div className="details__Main">
                    <div className="about__Container">
                        <h3>About Us</h3>

                        <ul>
                            <li>Location</li>
                            <li>Visit Us</li>
                            <li>Get in touch</li>
                        </ul>
                    </div>

                    <div className="career__Container">
                        <h3>Careers</h3>

                        <ul>
                            <li>Roles</li>
                            <li>Interviews</li>
                            <li>Brochures</li>
                        </ul>
                    </div>

                    <div className="ceo__Container">
                        <h3>CEO</h3>

                        <ul>
                            <li>Bilal Rezmin</li>
                            <li>Adriana Lusi</li>
                            <li>Johnson Sika</li>

                        </ul>
                    </div>
                </div>
                </div>

                <div className="managers__Container">
                    <h2>Florenting Guzaman</h2>
                    <h2>Micahel Duro</h2>
                    <h2>Jerrin Diola</h2>
                </div>
            </div>
        </div>
    )
}

export default Footer
