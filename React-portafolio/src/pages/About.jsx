import React from "react";
import profileImg from "../assets/images/jaimeavatar.png"


export default function About() {
    return (
      <div className="about">
        <img src = {profileImg} alt="Developer Avatar" />
        <h2>About Me</h2>
        <p>
         hi my name is jaime and a currently work at a e-commerce in mexico hoping to be a good developer 
        </p>
      </div>
    );
  }

