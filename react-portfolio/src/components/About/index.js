import React from "react"
import selfImage from "../../assets/img/linkedin-logo.png";


function About(){

    return(
        <section className="aboutme">
            <h1 id="about">Rotimi <br/>Amao </h1>
            <img src={selfImage} className="my-1" style={{ width: "100%" }} alt="cover"/>
            <div className="aboutme_desc">
                <p>
                  I'm a full stack web developer who fall in love in exploring and making use of new technologies.  
                </p>
            </div>

        </section>
    )
}


export default About;