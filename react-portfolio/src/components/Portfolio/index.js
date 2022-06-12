import React from "react";
import { MDMask, MDBView, MDBContainer, MDRow, MDBCol } from "mdbreact";
import photo1 from "../../assets/code-refactor.png";
import photo2 from "../../assets/employees-tracker.png";
import photo3 from "../../assets/pizza-hunt.png";
import photo4 from "../../assets/pro-portfolio.png";
import photo5 from "../../assets/run-buddy.png";
import photo6 from "../../assets/work-day-scheduler.png";
//import photo7 from "../../assets/notes-taker.png";


import githubLogo from "../../assets/img/githubLogo";

const currentWebsite = [{
    name: "code-refactor",
    github: "https://github.com/Rotimi-28/code-refactor",
    url: "https://rotimi-28.github.io/code-refactor/",
    photo: photo1
},
{
    name: "code-refactor",
    github: "https://github.com/Rotimi-28/employee-tracker/settings/pages",
    url: "https://rotimi-28.github.io/employee-tracker/",
    photo: photo2
},
{
    name: "pizza-hun",
    github: "https://github.com/Rotimi-28/pizza-hunt",
    url: "https://rotimi-28.github.io/pizza-hunt/",
    photo: photo3
},
{
    name: "pro-portfoli",
    github: "https://github.com/Rotimi-28/pro-portfolio/settings/pages",
    url: " https://rotimi-28.github.io/pro-portfolio/",
    photo: photo4
},
{
    name: "run-buddy",
    github: "https://github.com/Rotimi-28/Run-Buddy",
    url: "https://rotimi-28.github.io/Run-Buddy/",
    photo: photo5
},
{
    name: "work-day-scheduler",
    github: "https://github.com/Rotimi-28/work-day-scheduler",
    url: " https://rotimi-28.github.io/work-day-scheduler/",
    photo: photo6
}];



function Portfolio() {

    return(
        <section>
            <div className="container">
                <div className="row justify-content-md-center">
                    {currentWebsite.map((website) => (
                        <div className="websiteimages w-50 col-md-4 col-sm-6">
                            <MDBView hover zoom>
                                <img
                                src={website.photo}
                                alt="code-refactor"
                                className="img-thumbnail mx-l"
                                key={website.name}
                                />
                                <MDMask overlay="blue-grey-strong align-middle">
                                    <div className="logos align-middle mt-5 ml-5">
                                        <a href={website.github} target="_blank"><img className="webimg" src={githubLogo} style={{ width: "25%" }} alt="logo"/></a>
                                        <a href={website.url} target="_blank"><span className="webdescrioption h6 align-mddile"> {website.name}</span></a>
                                    </div>
                               </MDMask> 
                               </MDBView>      
                        </div>
                    )
                    )}
                </div>
            </div>
        </section>
    )
}

export default Portfolio;