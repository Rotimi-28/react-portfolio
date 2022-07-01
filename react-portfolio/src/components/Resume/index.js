import React from "react";
import linkedinlogo from "../../assets/img/linkedin-logo.png"

function Resume() {
    return (
        <section>
            <div className="resume">
                <h1 id="about">Resume</h1>
                <div className="logos">
                <a style={{ width: "30%" }} href="https://www.linkedin.com/in/rotimi-a-ezekiel-9378ba84/" target="_blank"> <img src={linkedinlogo} style={{ width: "20%" }} alt="logo"/></a>
                </div>
                <div className="resume">
                    <ul>
                        <p>Front End Proficiencies</p>
                        <li>
                            HTML
                        </li>
                        <li>
                            CSS
                        </li>
                        <li>
                            JavaScript
                        </li>
                        <li>
                            React
                        </li>
                        <li>
                            Handlebar
                        </li>
                        <li>
                            REST API Development (front-End)
                        </li>
                    </ul>
                    <ul>
                        <p>Back End Proficiencies</p>
                        <li>
                            Node.js
                        </li>
                        <li>
                            SQL
                        </li>
                        <li>
                            Mongodb
                        </li>
                        <li>
                            API Development (back-End)
                        </li>
                    </ul>

                </div>
            </div>
        </section>
    )
}

export default Resume;