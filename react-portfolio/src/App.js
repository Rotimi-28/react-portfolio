//import logo from './logo.svg';
import React, {useState} from 'react';
import contactForm from './components/contactForm';
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
        <footer></footer>
      </footer>

    </div>
  );
}

export default App;
