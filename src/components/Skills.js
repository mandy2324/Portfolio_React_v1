import React from 'react';
import { Row, Col } from 'react-bootstrap'; 

import Resume from '../assets/resume.pdf'


function Skills() {
return(
    <section>

<div className="resume-container">
    
<Row>
<h1 className="title"><a className="ResumeA" href={Resume} download>RESUME </a> </h1>
<h1 className="title">Skills :</h1>
    <Col lg={6} md={12}>

    <h2 className="resume">Font-end technologies:</h2>
    <ul>
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
            jQuery
        </li>
        <li>
            React.js
        </li>
        <li>
            Framework (Bootstrap, Materalize)
        </li>
        <li>
            UI/UX Design
        </li>
        <li>
            Responsive Web Design
        </li>
    </ul>
    </Col>

    <Col lg={6} md={12}>
            <h2 className="resume">Back-end technologies:</h2>
                <ul>
                    <li>
                        Node.js
                    </li>
                    <li>
                        Express.js
                    </li>
                    <li>
                        MySQL (mysql lite3, mysql2)
                    </li>
                    <li>
                        NoSQL (MongoDB, Mongoose)
                    </li>
                    <li>
                        API's (web, third-party, RESTful, server-side)
                    </li>
                    <li>
                        Templating language (Handlebars)
                    </li>
                </ul>
            </Col>

        <Col lg={12} md={12}>
        <h2 className="education underline">My Education:</h2>
        <br>
        </br>
        <p>
          <span className="school-name">University of NC Chapel Hill </span><br></br>
          Full Stack Boot Camp - Certification 
          <br></br>
          <br></br>
          <span className="school-name">University of South Carolina</span><br></br>
          Associate of Sciense 
          <br></br>
          <br></br>
          <span className="school-name">Sardar Patel University</span><br></br>
         Bachelor of Business Administration<br></br>
          Post gard diploma in Business management<br></br>
        </p>
        </Col>
        </Row>
        </div>

</section>
);
}

export default Skills;