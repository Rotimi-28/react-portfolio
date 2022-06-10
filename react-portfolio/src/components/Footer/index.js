import React from "react";
import linkinlogo from "../../assets/img/linkinlogo";
import githublogo from "../../assets/img/githublogo";

function Footer() {
    //footer with github and linkin logo
    return (
        <section className="logos">
            <a style={{ width: "30%" }} href="https://www.linkedin.com/in/rotimi-a-ezekiel-9378ba84/" target="_blank"> <img src={linkinlogo} style={{ width: "20%" }} alt="logo"/></a>
            <a style={{ width: "30%" }} href="https://github.com/Rotimi-28" target="_blank"> <img src={githublogo} style={{ width: "20%" }} alt="logo"/></a>
        </section>
    )
}


export default Footer;