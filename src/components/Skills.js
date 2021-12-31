import React from 'react';
import { Row, Col } from 'react-bootstrap'; 



function Skills() {
return(
    <section>
<div class="resume-container">
<Row>
    <Col lg={4} md={12}>
    <h2 class="resume">font-end technologies</h2>
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

    <Col lg={4} md={12}>
            <h2 class="resume">back-end technologies</h2>
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

        <Col lg={4} md={12}>
        <h2 class="education">my education</h2>
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
         Bachelor in Business Administration<br></br>
          Post gard diploma in Business management<br></br>
        </p>
        </Col>
        </Row>
        </div>

</section>
);
}

export default Skills;