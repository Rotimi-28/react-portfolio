//import logo from './logo.svg';
import React, {useState} from 'react';
import ContactForm from './components/contactForm';
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer"
import './App.css';

function App() {
  const [sectionSelected, setSectionSelected] = useState("About Me");
  return (
    <div className='overall'>
      <Nav setSectionSelected={setSectionSelected}
      sectionSelected={sectionSelected}>
      </Nav>
      <main>
        {sectionSelected === "About Me" && <About></About>}
        {sectionSelected === "Portfolio" && <Portfolio></Portfolio>}
        {sectionSelected === "ContactForm" && <ContactForm></ContactForm>}
        {sectionSelected === "Resume" && <Resume></Resume>}
      </main>
      <footer>
        <Footer></Footer>
      </footer>

    </div>
  );
}

export default App;
