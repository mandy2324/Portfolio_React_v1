import React from 'react'; 
import myImage from '../assets/images/myimage.png';
// import { Col } from 'react-bootstrap';

import { Row, Col } from 'react-bootstrap'; 

import Resume from '../assets/resume.pdf'


function About() {
    return(
        <section className="title">
      
        <div className="row justify-content-center" id="about-container">       
        <Col lg={6} md={12}>
        <center><img src={myImage} className="my-image" alt="mandy-profile"/></center>
        <p class="name">Mandeepkaur Saini</p>
        <p class="job">Full stack web developer</p>
        <h2 class="education">About me:</h2>
        <p>
        Hello, I'm Mandeepkaur Saini! I am passionate and solutions-driven full stack web developer with a Web Development Certificate from the University of North Carolina, Chapel Hill. 
        <br></br>
        <br></br>
        Strong communication, collaboration, problem-solving, and analytical skills. Strong ability
                    to design, build, and maintain websites from conception to production. Ability to work in a fast-paced and diverse team environment developing solutions and exceeding expectations.
        <br></br>
        <br></br>
         </p>
      </Col>

      </div>
   
   <div>


{/* <h1 data-testid='h1tag' className="contact">Contact Me:</h1> */}

<div className="contact-icons">
<Row>
    <Col lg={3} md={12}>
    <a href="https://github.com/mandy2324"><img src="https://img.icons8.com/doodle/100/000000/github--v1.png" alt="github-logo" class="icon"/></a><p class="icon-text">github</p>
    </Col>

    <Col lg={3} md={12}>
    <a href="https://www.linkedin.com/in/m23saini/"><img src="https://img.icons8.com/doodle/100/000000/linkedin--v2.png" alt="linkedin-logo" class="icon"/></a><p class="icon-text">linkedin</p>
    </Col>

    <Col lg={3} md={12}>
    <a href="mailto:m23saini@gmail.com"><img src="https://img.icons8.com/doodle/120/000000/new-post.png" alt="mail-logo"/></a><p class="icon-text">email</p>
    </Col>

    <Col lg={3} md={12}>
    <a href={Resume} download><img src="https://img.icons8.com/doodle/120/000000/pdf-2.png" alt="resume" /></a><p class="icon-text">resume</p>
    </Col>
</Row>
</div>

</div>

</section>

)}





    
    

export default About;

