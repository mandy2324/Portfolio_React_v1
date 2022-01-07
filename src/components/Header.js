import React, { useState } from 'react';

import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";

import Navigation from './Navbar';

import ContactForm from './ContactForm';

// import Resume from '../Resume';

function Portfolio() {
    // state of current page 
    const [currentPage, handlePageChange] = useState('About');

    const renderPage = () => {
        // switch statement that will return the appropriate component of the 'currentPage'
        switch(currentPage) {
          case "about": 
          return <About></About>
          case "contact": 
          return <Contact></Contact>, <ContactForm> </ContactForm>
          case "portfolio":
          return  <Projects></Projects>
          default:
            return <About></About>
        }
       
    };

return (
    <div>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>
        {
          // Render the component returned by 'renderPage()'
          renderPage()
        }
      </div>
    </div>
  );
}

export default Portfolio;