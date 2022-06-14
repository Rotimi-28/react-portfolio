import React, { useEffect } from "react";
 
function Nav(props) {
  const {
    setSectionSelected,
    sectionSelected,
  } = props;
  //useEffect(() => {
    //document.title = capitalizeFirstLetter(currentCategory.name);
  //}, [currentCategory]);

    return (
      <header>
        <nav className="headerdata d-flex w-auto">
          <h2 className="font-weight-bold">
            Rotimi <br/>
            Amao
          </h2>
          <ul className="mx-2 font-weight-bold">
            <a href="#aboutme" onClick={() => setSectionSelected("About Me")}>
              <span>About Me</span>
            </a>
          </ul>
          <ul className="mx-2 font-weight-bold">
            <a href="#portfolio" onClick={() => setSectionSelected("Portfolio")}>
              <span>Portfolio</span>
            </a>
          </ul>
          <ul className="mx-2 font-weight-bold">
            <a href="#contactform" onClick={() => setSectionSelected("ContactForm")}>
              <span>ContactForm</span>
            </a>
          </ul>
          <ul>
          <ul className="mx-2 font-weight-bold">
            <a href="#resume" onClick={() => setSectionSelected("Resume")}>
              <span>Resume</span>
            </a>
          </ul>
          </ul>
        </nav>
      </header>
    )
}
  export default Nav;