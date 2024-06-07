import React from 'react';

function Resume() {
    return (
        <section id="resume">
            <h2>
                Resume
            </h2>
            <a href="your-resume.pdf" download>Download Resume</a> <br></br>
            <p> list of expertise </p>
            <ul> 
                <li> MongoDB </li>
                <li> Express </li>
                <li> React </li>
                <li> Node.js </li>
            </ul>
        </section>  
    );
}

export default Resume;