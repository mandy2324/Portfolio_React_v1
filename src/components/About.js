import React from 'react'; 
import myImage from '../assets/images/myimage.png';
// import flowerImage from '../../assets/images/myflower.png';s
import { Col } from 'react-bootstrap';
function About() {
    return(
        <section className="title">
      
        <div className="row justify-content-center" id="about-container">       
        <Col lg={6} md={12}>
        <center><img src={myImage} className="my-image" alt="mandy-profile"/></center>
        <p class="name">Mandeepkaur Saini</p>
        <p class="job">full stack web developer</p>
        <h2 class="education">about me</h2>
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
    </section> 
)}

export default About;

